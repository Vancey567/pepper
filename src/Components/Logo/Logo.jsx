import React, { useEffect, useState } from 'react'
import './Logo.css';

import footerLogo from "../../images/footer-logo.png";
import logoImg from "../../images/logo.png";

const url = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

const Logo = ({section}) => {
  const [logo, setLogo] = useState('')

  useEffect(() => {
    const readData = async () => {
      try {
        const res = await fetch(`${url}/admin/data`);
        const data = await res.json();
        setLogo(url + data.image);
      } catch (err) {
        console.log(err);
      }
    };
    readData();
  }, [logo]);

  return (
    <div>
      // <img className='logo' src={section === 'footer' ?  footerLogo : logo} alt="logo"/>
      <img className='logo' src={logoImg} alt="logo"/>
    </div>
  )
}

export default Logo
