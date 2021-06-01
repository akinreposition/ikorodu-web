import React, { useState, useEffect } from 'react'
// import Backdrop from '../components/features/Backdrop'
import battery from '../assets/svgs/battery.svg'
import compressor from '../assets/svgs/compressor.svg'
import SectionOne from '../components/home/SectionOne'
import TimedPopup from '../components/Popup'
import { TimedPopupContent } from '../components/Popup/TimedPopupContent'



const  LandingPage = () => {
    const [popupState, setState] = useState(true)      // useState should remain true because of the pop info
    useEffect(()=> {
        setTimeout(() => {
        setState(false);
        }, 3000)
    }, []);
    return (
        <main>
            <TimedPopup trigger={() => setState(true)} state={popupState}>
                <TimedPopupContent />
            </TimedPopup>
            {/* <Backdrop /> */}
            <SectionOne />
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
                            <button className="button">Discover More</button>
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
                            <button className="button">Discover More</button>
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
                            <button className="button">Discover More</button>
                        </div>
                    </article>
                </div>
            </section>
            <section id="key-features">
                <h1 className="section-title">Many Good Reasons to Stick Around</h1>
                <ul className="key-features__list">
                    <li className="key-feature">
                        <div className="key-feature__svg">
                            <img src={compressor} width='128px'
                            height='128px' alt="Houses"/>
                        </div>
                        <p className="key-feature__description"> Reduced Travel Time</p>
                    </li>
                    <li className="key-feature">
                        <div className="key-feature__svg">
                        <img src={battery} width='124px'
                            height='124px' alt="Business"/>
                        </div>
                        <p className="key-feature__description"> Improve Economic Activities</p>
                    </li>
                    <li className="key-feature">
                        <div className="key-feature__svg">
                        <img src={compressor} width='128px'
                            height='128px' alt="Health"/>
                        </div>
                        <p className="key-feature__description">Improve Trust & Mortality Rate</p>
                    </li>
                </ul>
            </section>
        </main>
    )
    
}

export default LandingPage
