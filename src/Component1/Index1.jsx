import React, { useEffect, useState } from 'react'
import Style from './index.module.css'
// import CustomIcons from './Card'
// import { Pagination } from '@mui/material'


function Index1() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProduct = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()

    console.log(data)
    if (data && data.products) {
      setProducts(data.products)
    }
  }
  // console.log(products)

  useEffect(() => {
    fetchProduct()

  }, [])

  const handlePageChange = (selectedPage) => {
    if (selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page)
      setPage(selectedPage)
  }

  //   const pageData =10
  // const[currentPage,setCurrentPage]=useState(1)
  //   const startIndex = (currentPage - 1)*pageData
  //   const endIndex = startIndex+pageData
  //   const currentPageData = products.slice(startIndex,endIndex)
  //   const handleChange =(event,page)=>{
  //     console.log(page)
  //     setCurrentPage(page)
  //   }

  return (
    <>


      {products && products.length > 0 && (
        <div className={Style.products}>
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <div className={Style.productItem} key={product.id}>
                <img src={product.thumbnail} alt={product.title} className={Style.productImage} />
                <br />
                <span className={Style.productTitle}>{product.title}</span>

              </div>
            )
          })}

        </div>
      )}
      <br />
      <h1>hii</h1>
      {/* <Pagination
        count={Math.ceil(products.length/pageData)}
       page={currentPage}
       onChange={handleChange}
      /> */}


      {/* {
         products.length > 0 && ( <div className={Style.Pagination}>
          <span> prev  </span>
          {[...Array(products.length / 10)].map((_,i)=>
           <span key={i}>{i+1} </span>
          ) }
          <span> next  </span>
         </div>)
      } */}

      {products.length > 0 && (
        <div className={Style.Pagination}>
          <span onClick={() => handlePageChange(page - 1)} 
          className={page > 1 ? "" : Style.selectedPageDisebal}>Prev</span>
          {[...Array(products.length / 10)].map((_, i) => (
            <span key={i}
              onClick={() => handlePageChange(i + 1)}
              className={page === i + 1 ? Style.selectedPage : "selectedPageDisebal"}>
              {i + 1}
            </span>

          ))}
          <span onClick={() => handlePageChange(page + 1)}
            className={page < products.length /10 ? "" : Style.selectedPageDisebal}>
            Next</span>
        </div>
      )}



    </>




  )
}

export default Index1