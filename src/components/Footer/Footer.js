import { CiFacebook, CiTwitter, CiYoutube, CiInstagram } from "react-icons/ci";
import './Footer.scss'
import { Fragment } from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (  
    <Fragment>
      <footer>
        <div className="footer-container">

          <div className="made">
            <p className="text-center mb-0 text-black">
              &copy; {currentYear} | Hecho con ♥️ by Urban Kvinde
            </p>
          </div>

          <div className="rrss">
            <div className="social-icons d-flex align-items-center gap-3 mt-4">
              <a 
                href="https://www.facebook.com" 
                className="text-black" 
                target="_blank" 
                rel="noreferrer noopener"
              >
                <CiFacebook className="media-icon" />
              </a>
              <a 
                href="https://www.instagram.com" 
                className="text-black" 
                target="_blank" 
                rel="noreferrer noopener"
              >
                <CiInstagram className="media-icon" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-black" 
                target="_blank" 
                rel="noreferrer noopener"
              >
                <CiTwitter className="media-icon" />
              </a>
              <a 
                href="https://www.youtube.com" 
                className="text-black" 
                target="_blank" 
                rel="noreferrer noopener"
              >
                <CiYoutube className="media-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer