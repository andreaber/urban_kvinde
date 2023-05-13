import { CiFacebook, CiTwitter, CiYoutube, CiInstagram } from "react-icons/ci";

import './Footer.scss'

const Footer = () => {
  return (  
    <div>
    <footer className="">
      <div className="">
        <div className="footer-container">
          <div className="made">
            <p className="text-center mb-0 text-black">
              &copy; {new Date().getFullYear()} | Hecho con ♥️ by Urban Kvinde
            </p>
          </div>

          <div className="rrss">
            <div className="social-icons d-flex align-items-center gap-3 mt-4">
              <a href="https://www.facebook.com" className="text-white" target="_blank" rel="noreferrer noopener">
                <CiFacebook className="media-icon" />
              </a>
              <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noreferrer noopener">
                <CiInstagram className="media-icon" />
              </a>
              <a href="https://twitter.com" className="text-white" target="_blank" rel="noreferrer noopener">
                <CiTwitter className="media-icon" />
              </a>
              <a href="https://www.youtube.com" className="text-white" target="_blank" rel="noreferrer noopener">
                <CiYoutube className="media-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer