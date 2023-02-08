import React, { useEffect, useState } from 'react'
import './Logo.css';

import footerLogo from "../../images/footer-logo.png";
import logoImg from "../../images/logo.png";

const url = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

const Logo = ({section}) => {
  return (
    <div>
      <img className='logo' src={section === 'footer' ?  footerLogo : logoImg} alt="logo"/>
    </div>
  )
}

export default Logo
