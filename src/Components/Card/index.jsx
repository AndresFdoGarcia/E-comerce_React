import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = (data) => {

    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)        
    }
    const addProductsToCart = (productData) =>{        
        context.setCartProducts([... context.cartProducts,productData]);
        context.setCount(context.count + 1);
        console.log(context.cartProducts);
        
    }

    return(
        <div 
        className="bg-white cursor-pointer w-56 h-60"
        onClick={()=> showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.4">{data.data.categories.map((category, index) => (
                <span key={index} className="mr-1">
                {category.categoryName}
                {index < data.data.categories.length - 1 && ', '}
                </span>))}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.productName}></img>
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <PlusIcon className='h-3 w-3 text-black'
                    onClick={(e)=>{
                        e.stopPropagation();                        
                        addProductsToCart(data.data);
                    }}></PlusIcon>
                </div>                
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.productName}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>            
        </div>
    );
}

export default Card