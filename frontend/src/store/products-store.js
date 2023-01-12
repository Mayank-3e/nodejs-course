import React, { useState } from "react";

export const ProductsContext=React.createContext()

export const ProductsProvider=props=>
{
    const [prods,setProds]=useState([])

    return <ProductsContext.Provider value={{prods,setProds}}>
        {props.children}
    </ProductsContext.Provider>
}