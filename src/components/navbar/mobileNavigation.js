import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import AutomainLogo from '../../assets/logo.png'

export const MobileNavigation = ({ icon }) => {
  const [active, setActive] = useState(false)  
  return (
    <div className='mobile-navigation'>
      <div className='logo'>
        <Link to='/'>
          <i className={icon} />
          <span className='text-blue'>
              CDA
            {/* <img src={AutomainLogo} alt='CDA Official Logo' /> */}
          </span>
        </Link>
      </div>
        <div>
           <div className='hamburger' onClick={() => setActive(!active)}></div>
      <div className={`mobile-navbar ${active ? 'active' : ''}`}>
      <div className="contain">
            <div className='hamburger-close' onClick={() => setActive(!active)}></div>
      </div>

        <div className='navbar-text'>
          <ul>
            <li>
                <Link to='/cda'>CDA's</Link>
            </li>
            <li>
            <Link to="/contact-us">Contact us</Link>
            </li>
            <li>
            <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
        <Link to='/news'>
          <button className='navbar-button'> LocalGossips</button>
        </Link>
      </div>
        </div>    
    </div>
  )
}
