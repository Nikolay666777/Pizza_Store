import logo from '../assets/logo.png'

function Menu({list}){
    const year  = new Date().getFullYear()
    return(
        <div>
        <ul className='text-sm '>
            {Object.entries(list).map(([url, title]) => (
                <a key={Math.floor(Math.random()*1000)} className='hover:font-medium' href={url}>
                    <li>{title}</li>
                </a>
            ))}
        </ul>
        <span className='text-xs p-4'>© ООО «Пиццастор», { year }</span>
        </div>
    )
}

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

export default function Footer(){
    const menu = {
        "/catalog" : 'Каталог',
        "/about": 'О нас'
    }
    return (
        <footer className="bg-black">
            <div className='container mx-auto flex text-white px-10 py-4 justify-between'>
                <LogoBlock logo={logo} url= '/' title='Pizza Store' />
                <Menu list={menu}/>
            </div>
        </footer>
    )
}