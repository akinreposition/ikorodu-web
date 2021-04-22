import React from 'react'
import { Link } from 'react-router-dom'
import LogoAutomain from '../../assets/LogoAutomain.png'

const Navbar = () => {
    return (
            <nav className="main-header">
                <div className="main-header__brand">
                    <Link to='/'><img src={LogoAutomain} alt="Ikorodu Oga"/></Link>
                </div>  
                <div>
                <ul className="main-nav main-nav__items">
                        <li className="main-nav__item">
                            <Link to='/enviroments'>Enviroments</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to="/news">News</Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to="/packages">Packages</Link>
                        </li>
                        <li className="main-nav__item main-nav__item--cta">
                            <Link to="/subscribe">SUBSCRIBE</Link>
                        </li>
                   </ul>  
                </div>          
	        </nav>
    )
}

export default Navbar