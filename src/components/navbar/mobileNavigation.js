import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import nigeriaSvgrepo from '../../assets/svgs/nigeriaSvgrepo.svg'

export const MobileNavigation = () => {
  const [active, setActive] = useState(false)  
  return (
    <div className='mobile-navigation'>
      <div className='logo'>
      <Link to='/'>
          {/* <i className={icon} /> */}
          <img src={nigeriaSvgrepo} width="80px" height="40px" alt='CDA Official Logo' />
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
                <Link to='/lcda'>LCDA</Link>
            </li>
            <li>
            <Link to="/services">Services</Link>
            </li>
            <li>
            <Link to="/contact-us">Contact us</Link>
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
