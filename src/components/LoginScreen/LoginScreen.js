import { useContext, useState } from 'react'
import './LoginScreen.scss'
import { LoginContext } from '../../context/LoginContext'


const LoginScreen = () => {
  const {login} = useContext(LoginContext)

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
    login(values)
  }

  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
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

          <button type='submit' className='btn btn-primary'>Ingresar</button>

        </form>
      </div>
    </div>
  )
}

export default LoginScreen

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