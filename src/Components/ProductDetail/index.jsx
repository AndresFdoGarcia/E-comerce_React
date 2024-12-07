import { useContext, useState  } from 'react';
import { ShoppingCartContext } from "../../Context";
import './style.css';
import { XMarkIcon } from '@heroicons/react/24/solid'


const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext);
    const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        context.addToCart(context.productToShow, quantity);
    };

    return (
        <aside 
        className={`${context.isOpenProductDetail ? 'flex': 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon 
                className='h-5 w-5 text-black cursor-pointer'
                onClick={()=>context.closeProductDetail()}></XMarkIcon>          
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.productToShow.image} alt={context.productToShow.productName} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='flex justify-between items-center mb-2'>
                    <span className='font-medium text-2xl'>
                        ${context.productToShow.price}
                    </span>
                    <span className='stock-qty'> {context.productToShow.stockQty} in stock</span>
                </span>
                <span className='font-medium text-md text-2xl  mb-4'>{context.productToShow.productName}</span>
                <span className='font-medium text-md text-gray-500'>{context.productToShow.descript}</span>              
            </p>

            <div className='flex items-center justify-between p-6'>
                <button onClick={handleDecrement} className='px-2 py-1 bg-gray-200 rounded'>-</button>
                <span className='mx-4'>{quantity}</span>
                <button onClick={handleIncrement} className='px-2 py-1 bg-gray-200 rounded'>+</button>
                <button onClick={handleAddToCart} className='ml-4 px-4 py-2 bg-blue-500 text-white rounded'>Add to Cart</button>
            </div>
        </aside>
    )
}

export default ProductDetail