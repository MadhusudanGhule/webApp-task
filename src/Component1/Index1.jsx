import React, { useEffect, useState } from 'react'
import Style from './index.module.css'
function Index1() {
  const [products, setProducts] = useState()

  const fetchProduct = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()

    console.log(data)
    if (data && data.products) {
      setProducts(data.products)
    }
  }
  console.log(products)

  useEffect(() => {
    fetchProduct()

  }, [])

  return (
    <>


      {products && products.length > 0 && (
        <div className={Style.products}>
          {products.map((product) => {
            return (
              <div className={Style.productItem} key={product.id}>
                <img src={product.thumbnail} alt={product.title} className={Style.productImage}/>
                <br/>
                <span className={Style.productTitle}>{product.title}</span>

              </div>
            )
          })}
        </div>
      )}



    </>




  )
}

export default Index1