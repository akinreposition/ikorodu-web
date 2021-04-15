import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="main-footer">
		<nav>
			<ul className="main-footer__links">
				<li className="main-footer__link">
					<Link to="/subscribe">Support</Link>
				</li>
				<li className="main-footer__link">
					<Link to="/terms">Term of Use</Link>
				</li>
			</ul>
		</nav>
	</footer>
    )
}

export default Footer