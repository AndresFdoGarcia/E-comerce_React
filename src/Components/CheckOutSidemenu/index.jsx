import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context";
import './style.css';
import { XMarkIcon } from '@heroicons/react/24/solid'


const CheckOutSideMenu = () =>{

    const context = useContext(ShoppingCartContext);    

    return (
        <aside 
        className={`${context.isOpenProductDetail ? 'flex': 'hidden'} checkout-side flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon 
                className='h-5 w-5 text-black cursor-pointer'
                onClick={()=>context.closeProductDetail()}></XMarkIcon>          
            </div>            
        </aside>
    )
}

export default CheckOutSideMenu