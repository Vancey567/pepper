import React from 'react';
import Button from '../Button/Button';
import Detail from '../Detail/Detail';

import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-action-container">
          <div className="header-action">
            <h1>Save more and get your finances right</h1>
            <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
            {/* <Button value="Request a demo" color="#8a04c7"/> */}
            <button className="demo-btn">Request a demo</button>
          </div>
        </div>
        {/* <Detail /> */}
        <div className="hero">
          <img src="../../images/hero.png" alt="hero" />
        </div>
        <p className="trust">Trusted and loved by the world’s best teams</p>
    </div>
  )
}

export default Header