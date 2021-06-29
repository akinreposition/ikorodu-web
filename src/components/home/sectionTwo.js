import React from 'react'
import { Link } from 'react-router-dom'

const SectionTwo = () => {
    return (
        <section id="plans">
        <h1 className="section-title">Discover Your Community</h1>
        <div className="plan__list">
            <article className="plan">
                <h1 className="plan__annotation">HOUSES</h1>
                <h1 className="plan__title">Find Your community</h1>
                {/* <h2 className="plan__price">FREE</h2>
                <h3>For hobby projects or small teams.</h3> */}
                <ul className="plan--features">
                    <li>Find Address</li>
                    <li>Security Gist</li>
                    <li>Find Next Kiosk</li>
                    <li>Basic Support For Hustle</li>
                </ul>
                <div>
                    <Link to="/communities">
                        <button className="button">Discover More</button>
                    </Link>
                </div>
            </article>
            <article className="plan plan--highlighted">
                <h1 className="plan__annotation">BUSINESS</h1>
                <h1 className="plan__title">MSME AROUND YOU</h1>
                {/* <h2 className="plan__price">$29/month</h2> */}
                <ul className="plan--features">
                    <li>For ambitious projects</li>
                    <li>Available Workspaces</li>
                    <li>Find Local Professional</li>
                    <li>Formal and Informal Education</li>
                    <li>Transportation</li>
                </ul>
                <div>
                    <Link to="/communities/msme">
                        <button className="button">Discover More</button>
                    </Link>
                </div>
            </article>
            <article className="plan">
                <h1 className="plan__annotation">HEALTH CARE</h1>
                <h1 className="plan__title">Your Health Care Finder.</h1>
                {/* <h2 className="plan__price">PREIMUM</h2>
                <h3>Your Health Care Finder.</h3> */}
                <ul className="plan--features">
                    <li>Health Care Center</li>
                    <li>Traditional Care Giver</li>
                    <li>Pharmacy</li>
                    <li>Specialities Support Center</li>
                </ul>
                <div>
                    <Link to="/communities/health">
                        <button className="button">Discover More</button>
                    </Link>
                </div>
            </article>
        </div>
    </section>
    )
}

export default SectionTwo
