import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="" className='' alt="Logo Frighor" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" to="/categoria/1"> Papas </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/2"> Helados </NavLink>
          </li>
          <li>
            <NavLink className="miBtn" to="/categoria/3"> Pastas </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar