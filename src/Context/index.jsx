import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);
    const [productToShow, setProductToShow] = useState({});

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.productId === product.productId);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.productId === product.productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const openProductDetail = () => setIsOpenProductDetail(true);

    const closeProductDetail = () => {
        setIsOpenProductDetail(false);
    };

    return (
        <ShoppingCartContext.Provider value={{
            cart,
            addToCart,
            isOpenProductDetail,
            productToShow,       
            setProductToShow,      
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}