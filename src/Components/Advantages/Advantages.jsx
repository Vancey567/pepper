import React from 'react'
import Extra from './Extra/Extra'

import './Advantages.css';

const Advantages = () => {
  return (
    <div className="advantages-container">
        <div className="advantage first-advantage">
            <div className="advantage-div">
                <img src="../../images/first-adv.png" alt="adv" />
            </div>
            <Extra heading="Manage and Track Your Projects" color="purple" />
        </div>
        <div className="advantage second-advantage">
            <Extra heading="Easily manage your team's tasks" color="green" />
            <div className="advantage-div">
                <img src="../../images/second-adv.png" alt="adv" />
            </div>
        </div>
        <div className="advantage third-advantage">
            <div className="advantage-div">
                <img src="../../images/third-adv.png" alt="adv" />
            </div>
            <Extra heading="Simple financial overview for you" color="purple" />
        </div>
        <div className="extra-advantage">
            <h1>Don’t take our words for it - listen to our clients</h1>
            <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
        </div>
    </div>
  )
}

export default Advantages