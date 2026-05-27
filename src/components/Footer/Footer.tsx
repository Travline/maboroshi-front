import React from 'react';
import './Footer.css';
import logoPng from '/assets/Footer.png'; 

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-topSection">
          
          <div className="footer-brandGroup">
            <div className="footer-logoContainer">
              <img 
                src={logoPng} 
                alt="Maboroshi Pixel Logo" 
                className="footer-logo" 
              />
            </div>

            <div className="footer-textGroup">
              <h2 className="footer-title">Maboroshi</h2>      
              <nav>
                <ul className="footer-navLinks">
                  <li><a href="#instagram">Instagram</a></li>
                  <li><a href="#x">X</a></li>
                  <li><a href="#spotify">Spotify</a></li>
                  <li><a href="#contacto">Contacto</a></li>
                  <li><a href="#terminos">Términos</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <span className="footer-copyright">
            © 2026 Maboroshi INC. All Rights Reserved
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;