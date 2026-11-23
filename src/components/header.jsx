import { NavLink, useLocation } from 'react-router-dom'
import CartIcon from '../assets/cart.svg'
import logo from '../assets/logo.png'
import { useContext, useEffect, useState } from 'react'
import { cartState } from '../App'


function LogoBlock({ logo, url, title }){
    return (
        <a href= {url}>
            <div className='flex font-black text-xl items-center gap-4'>
                <img src={ logo } alt="logo" className='h-14'/>
                {title}
            </div>
        </a>

    )
}

function Menu({list}){
    return(
        <ul className='flex flex-row gap-4 p-4'>
            {Object.entries(list).map(([url, title]) => (
                <NavLink key={Math.floor(Math.random()*1000)} to= {url} className={({isActive}) => isActive ? "font-medium" : "hover:font-medium"}>{title}</NavLink> 
            ))}
        </ul>
    )
}
function Cart({count}){
    return(
        <div className='relative inline-flex justify-center items-center'>
            <img src={CartIcon} alt="cartIcon" className='h-14'/>
            <span className='absolute top-0 right-0 bg-red-300 text-white rounded-xl size-6 text-center'>{count}</span>
        </div>
    )
}
export default function Header(){
    const location = useLocation()
    const count = useContext(cartState).state.totalqty 
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return !!localStorage.getItem('token')
    })
    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('token'))
    }, [location])

    let menu = (isLoggedIn)
    ?    {
        "/" : 'Каталог',
        "/about": 'О Нас',
        '/profile': 'Личный кабинет',
        "/logout" : 'Выйти',
    }
    :   {
        "/" : 'Каталог',
        "/about": 'О Нас',
        '/login': 'Войти'
    }

    return(
        <header className=' bg-gray-50 '>
            <div className=' container mx-auto flex justify-between p-4'>
            <LogoBlock logo={logo} url= 'http://localhost:5173/' title='Pizza Store' />
            <div className='flex'>
                <Menu list={menu}/>
                <NavLink to="/cart"><Cart count = {count} /></NavLink>
            </div>
            </div>  
        </header>
    )
}