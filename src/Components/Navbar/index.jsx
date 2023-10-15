import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";



const Navbar = () => {
    const context = useContext(ShoppingCartContext);

    let menu1 = [
        {
            to: '/',
            text: 'Shopi',
            className: 'font-semibold text-lg'
        },
        {
            to: '/',
            text: 'All',
            className: ''
        },
        {
            to: '/clothes',
            text: 'Clothes',
            className: ''
        },
        {
            to: '/electronics',
            text: 'Electronics',
            className: ''
        },
        {
            to: '/furnitures',
            text: 'Furnitures',
            className: ''
        },
        {
            to: '/toys',
            text: 'Toys',
            className: ''
        },
        {
            to: '/others',
            text: 'Others',
            className: ''
        },
    ]
    
    let menu2 = [
        {
            to: '/email',
            text: 'andres.perea.2092036@gmail',
            className: 'text-black/60'
        },
        {
            to: '/myorders',
            text: 'My orders',
            className: ''
        },
        {
            to: '/myoccount',
            text: 'My occount',
            className: ''
        },
        {
            to: '/signin',
            text: 'Sign in',
            className: ''
        },
        {
            to: '/shoppcar',
            text: `🛒 ${context.count}`,
            className: ''
        },
    ]

    

    const textDecoration = 'underline underline-offset-4'

  return (
    <nav className="flex items-center fixed justify-between z-10 top-0 w-full py-5 px-8 text-sm">
        <ul className='flex gap-3 items-center'>
            {menu1.map(link => (
                <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive && link.text !=="Shopi"
                        ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
        <ul className='flex gap-3 items-center'>
            {menu2.map(link => (
                <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  );
}

export default Navbar