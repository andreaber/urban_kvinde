import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import './Contacto.scss'
import React, { Fragment } from "react";


const Contacto = () => {
  const companyInfo = [
    {
      icon: AiOutlineHome,
      text: 'Olavarría 2680, Mar del Plata, Bs. As., ARGENTINA (7600)'
    },
    {
      icon: AiOutlinePhone,
      text: '(+54) 223 306-5071',
      link: 'tel:+54 2233065071'
    },
    {
      icon: AiOutlineMail,
      text: 'urban-kvinde@gmail.com',
      link: 'mailto:urban-kvinde@gmail.com'
    },
    {
      icon: AiOutlineInfoCircle,
      text: 'Lunes a Viernes 10 AM - 8 PM'
    }
  ]

  return (  
    <div className="contact-container">
      <div className="user-information-container">
        <h2>Datos de Contacto</h2>
        <span>¿Cómo podemos ayudarte?</span>
        <div className="data-container">
          <form action="" className="d-flex flex-column">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="tel"
                className="form-control"
                placeholder="Teléfono"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                className="w-100 form-control"
                cols="30"
                rows="4"
                placeholder="Comentarios"
              ></textarea>
            </div>

            <div className="button-container">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>

      <div className="company-information-container">
        <h2>Información de la Empresa</h2>
        <span>También puedes contactarte con nosotros a través de:</span>
        <div className="data-container">
          <ul className="ps-0 text-secondary fw-normal">
            {companyInfo.map((info) => (
              <li key={info.text} className="mb-0 d-flex gap-15 align-items-center">
                <p>  
                  {info.icon && (
                    <Fragment>
                      {React.createElement(info.icon, {className:"icon-company"})}
                      {' '}
                    </Fragment>
                  )}
                  {info.link ? (
                    <a href={info.link} className="data-company">{info.text}</a>
                  ) : (
                    <span className="data-company">{info.text}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacto

