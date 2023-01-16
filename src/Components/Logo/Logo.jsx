import React from 'react'

const Logo = ({section}) => {
  return (
    <div>
      <img src={section === 'footer' ?  "../../images/footer-logo.png" : "../../images/logo.png"} alt="logo"/>
    </div>
  )
}

export default Logo