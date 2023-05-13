import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import logo from '../../assets/logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'


const Navbar = () => {
  const { user, logout } = useContext(LoginContext)

  return (
    <header className="header">
      <div className="header_container">
        <img src={logo} className="header_logo" alt='logo' />

        <nav className="navbar">
          <Link to='/' className="navbar_link">inicio</Link>
          <Link to='/productos/deportivos' className="navbar_link">tennis</Link>
          <Link to='/productos/gorros' className="navbar_link">gorros</Link>
          <Link to='/productos/ellas' className="navbar_link">ellas</Link>
          <Link to='/productos/ellos' className="navbar_link">ellos</Link>
          <Link to='/nosotros' className="navbar_link">nosotros</Link>
          {/* <Link to='/contacto' className="navbar_link">contacto</Link> */}
          {/* <Link to='sign-in' className="navbar_link">iniciar sesión</Link> */}
        </nav>

        <CartWidget />
      </div>

      <div className='user'>
        <h6>¡Bienvenido {user.email}!</h6>
        <button onClick={logout} className='btn btn-danger'>Logout</button>
      </div>

    </header>
  )
}

export default Navbar