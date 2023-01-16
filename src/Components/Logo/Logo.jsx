import React from 'react'

import footerLogo from "../../images/footer-logo.png";
import navLogo from "../../images/logo.png";

const Logo = ({section}) => {
  return (
    <div>
      <img src={section === 'footer' ?  footerLogo : navLogo} alt="logo"/>
    </div>
  )
}

export default Logo