import React, { useCallback, useEffect, useState } from 'react';

const Password = () => {
    const [length, setLength] = useState(0);
    const [numallow, setNumallow] = useState(false)
    // const [symbolallow, setSymbolallow] = useState(false)
    const [charAllow, setCharAllow] = useState(false)
    const [password, setPassword] = useState("")

    const passwordGenrator = useCallback(() => {
        let pass = ""
        let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq"
        if (numallow) {
            str += "0123456789"
        }
        if (charAllow) {
            str += "!@#$%&(){}[]?/><+-"
        }

        for(let i=1;i<=length;i++){
            let chars=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(chars)
        }
        setPassword(pass)
    },[numallow, length, charAllow, setPassword])
   useEffect(()=>{ passwordGenrator()},[numallow, length, charAllow, setPassword])

    return (

        <>
            <div>
                <h1>Password genretor</h1>
            </div>
            <div>
                <p>your password</p>
                <input type="text"
                value={password}
                 />
                <button>copy</button>
                <br />
                <input type="range"
                min={6}
                max={20}
                value={length} 
                onChange={(e)=>{setLength(e.target.value)}}/>
               <p> length{length}</p>
                <p>number</p>
                <input type="checkbox" />
                <p>charactor</p>
                <input type="checkbox" />

            </div>
            <div>
                {/* <button onClick={passwordGenrator()}>render</button> */}
            </div>

        </>
    );
}

export default Password;
