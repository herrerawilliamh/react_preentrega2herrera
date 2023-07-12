import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div>
        <li className="carrito">
            <Link to="/carrrito"className="carrito-menu-linkE"><i className="bi bi-cart3"></i> Carrito<span className="numero">5</span></Link>
        </li>
    </div>
  )
}

export default CartWidget