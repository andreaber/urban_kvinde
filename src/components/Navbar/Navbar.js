import logo from '../../assets/logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

const Navbar = () => {

  return (
    <header className="header">
      <div className="header_container">
        <img src={logo} className="header_logo" alt='logo' />

        <nav className="navbar">
          <p className="navbar_link">SHOP</p>
          <p className="navbar_link">NOSOTROS</p>
          <p className="navbar_link">CONTACTO</p>
          <p className="navbar_link">INICIAR SESIÓN</p>
          
          <CartWidget />
        </nav>

        
      </div>
    </header>
  )
}

export default Navbar