import React from 'react'
import './Error404.scss'

const Error404 = () => {
  function goBack() {
    window.history.back()
  }

  return (
    <div className="error-page">
      <h1>404</h1>
      <h3>Uuups, página no encontrada</h3>
      <p>Lo siento, pero no se encuentra la página solicitada. Puedes regresar a la página anterior haciendo clic en el botón 'Volver'</p>
      <button onClick={goBack}>Volver</button>
    </div>
  )
}

export default Error404
