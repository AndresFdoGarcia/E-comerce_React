import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = useState(0) 
    const [isOpenProductDetail, setIsOpen] = useState(false)


//Product Detail . Open/Close
    const openProductDetail = () => setIsOpen(true);
    const closeProductDetail = () => setIsOpen(false);

//Product Detail . Show Product
    const[productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      });

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isOpenProductDetail,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}