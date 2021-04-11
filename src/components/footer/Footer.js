import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer class="main-footer">
		<nav>
			<ul class="main-footer__links">
				<li class="main-footer__link">
					<Link to="/subscribe">Support</Link>
				</li>
				<li class="main-footer__link">
					<Link to="/terms">Term of Use</Link>
				</li>
			</ul>
		</nav>
	</footer>
    )
}

export default Footer