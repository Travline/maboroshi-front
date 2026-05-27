import React from 'react';
import './404 ERROR.css';

import bkgImage from '/assets/404-error.jpg';
import logoPng from '/assets/Footer.png';

export const NotFound: React.FC = () => {
  return (
    <div className="notfound-page">

      <img
        src={bkgImage}
        alt="Background"
        className="notfound-bgImage"
      />
      <div className="notfound-overlay"></div>
      <div className="notfound-header">
        <img
          src={logoPng}
          alt="Logo"
          className="notfound-logo"
        />
      </div>
      <h1 className="notfound-bgText">
        PAGINA NO ENCONTRADA
      </h1>

    </div>
  );
};

export default NotFound;