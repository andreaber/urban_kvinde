import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

const Navbar = () => {

  return (
    <header className="header">
      <div className="header_container">
        <img src={logo} className="header_logo" alt='logo' />

        <nav className="navbar">
          <Link to='/' className="navbar_link">inicio</Link>
          <Link to='/productos/jackets' className="navbar_link">Jackets</Link>
          <Link to='/productos/deportivos' className="navbar_link">Tennis</Link>
          <Link to='/productos/gorros' className="navbar_link">Gorros</Link>
          <Link to='/productos/ellas' className="navbar_link">Ellas</Link>
          <Link to='/productos/ellos' className="navbar_link">Ellos</Link>
          {/*<Link to='/nosotros' className="navbar_link">nosotros</Link>
          <Link to='/contacto' className="navbar_link">contacto</Link>*/}
          <Link to='sign-in' className="navbar_link">iniciar sesión</Link>

          <CartWidget />
        </nav>

      </div>
    </header>
  )
}

export default Navbar