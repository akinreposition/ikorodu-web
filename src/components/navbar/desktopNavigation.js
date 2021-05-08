import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import AutomainLogo from '../../assets/logo.png'


export const DesktopNavbar = ({ icon }) => {  
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <i className={icon} />
          <span className='text-blue'>Home
            {/* <img src={AutomainLogo} alt='CDA Official Logo' /> */}
          </span>
        </Link>
      </div>
      <div className='navbar-main'>
           <div className="navbar-natural">
              <div className='navbar-text'>
          <ul>
            <li>
              <Link to='/cda'>CDA's</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to='/news'>
          <button className='navbar-button'>Local Gossips</button>
        </Link>
          </div>     
      </div>
    </nav>
  )
}