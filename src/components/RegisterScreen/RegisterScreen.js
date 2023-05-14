import { useContext, useState } from 'react'
import './RegisterScreen.scss'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'


const RegisterScreen = () => {
  const {register} = useContext(LoginContext)

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    register(values)
  }

  return (
    <div className="login-container">
      <div className="login">
        <h2>Registrarme</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input 
            name='email'
            value={values.email}
            onChange={handleChange}
            type={'email'}
            className='form-control my-2'
            placeholder='Tu email'
          />
          
          <input 
            name='password'
            value={values.password}
            onChange={handleChange}
            type={'password'}
            className='form-control my-2'
            placeholder='Contraseña'
          />

          <button type='submit' className='btn btn-primary'>Registrarme</button>
          <Link to={'/login'}>Ya estoy registrado</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen

/*
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handlePassword = (e) => {
  setPassword(e.target.value)
}
*/