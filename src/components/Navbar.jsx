import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbarE">
        <Link to='/' className="logoE"><h1>WillyCommerce</h1></Link>
        <ul className='menu-itemsE'>
            <li><Link to="/" className='menu-linkE'>Inicio</Link></li>
            <li><Link to="/nosotros" className='menu-linkE'>Nosotros</Link></li>
            <li><Link to="/productos" className='menu-linkE'>Productos</Link></li>
            <li><Link to="/productos/pantalones" className='menu-linkE'>Pantalones</Link></li>
            <li><Link to="/productos/medias" className='menu-linkE'>Medias</Link></li>
            <li><Link to="/productos/buzos" className='menu-linkE'>Buzos</Link></li>
            <li><Link to="/productos/remeras" className='menu-linkE'>Remeras</Link></li>
            <li><Link to="/contacto" className='menu-linkE'>Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar