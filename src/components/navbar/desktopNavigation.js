import React from 'react'
import { Link } from 'react-router-dom'
// import LogoAutomain from '../../assets/LogoAutomain.png'


export const DesktopNavbar = () => {
    return (
        <nav className="main-header">
                <div className="main-header__brand">
                <Link to='/'>CDA</Link>
                    {/* <Link to='/'><img src={LogoAutomain} alt="Nature from Top"/></Link> */}
                </div>  
                <div>
                <ul className="main-nav main-nav__items">
                        <li className="main-nav__item">
                            <Link to='/cda'>CDA's</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to="/contact-us">Contact us</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="main-nav__item main-nav__item--cta">
                            <Link to="/news">Local Gossips</Link>
                        </li>
                   </ul>  
                </div>          
	        </nav>
    )
}

export default DesktopNavbar
