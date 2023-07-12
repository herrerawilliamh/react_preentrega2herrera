import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbarE">
        <a href='#' className="logoE"><h1>WillyCommerce</h1></a>
        <ul className='menu-itemsE'>
            <li><a href="#" className='menu-linkE'>Inicio</a></li>
            {/* <li><a href="#" className='menu-linkE'>Nosotros</a></li> */}
            <li><a href="#" className='menu-linkE'>Productos</a></li>
            <li><a href="#" className='menu-linkE'>Pantalones</a></li>
            <li><a href="#" className='menu-linkE'>Medias</a></li>
            <li><a href="#" className='menu-linkE'>Buzos</a></li>
            <li><a href="#" className='menu-linkE'>Remeras</a></li>
            {/* <li><a href="#" className='menu-linkE'>Contacto</a></li> */}
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar