import React, { useState } from 'react'
import Backdrop from '../components/features/Backdrop'
import SectionOne from '../components/home/SectionOne'
import TimedPopup from '../components/Popup'
import { TimedPopupContent } from '../components/Popup/TimedPopupContent'


const  LandingPage = () => {
    const [popupState, setState] = useState(true)
    return (
        <main>
            <TimedPopup trigger={() => setState(true)} state={popupState}>
                <TimedPopupContent />
            </TimedPopup>
            <Backdrop />
            <SectionOne />
            <section id="plans">
                <h1 className="section-title">Choose Your plan</h1>
                <div className="plan__list">
                    <article className="plan">
                        <h1 className="plan__title">FREE</h1>
                        <h2 className="plan__price">$0/month</h2>
                        <h3>For hobby projects or small teams.</h3>
                        <ul className="plan--features">
                            <li>1 Workspace</li>
                            <li>Unlimited Traffic</li>
                            <li>10GB Storage</li>
                            <li>Basic Support</li>
                        </ul>
                        <div>
                            <button className="button">CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article className="plan plan--highlighted">
                        <h1 className="plan__annotation">RECOMMENDED</h1>
                        <h1 className="plan__title">PLUS</h1>
                        <h2 className="plan__price">$29/month</h2>
                        <h3>For ambitious projects.</h3>
                        <ul className="plan--features">
                            <li>5 Workspaces</li>
                            <li>Unlimited Traffic</li>
                            <li>100GB Storage</li>
                            <li>Plus Support</li>
                        </ul>
                        <div>
                            <button className="button">CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article className="plan">
                        <h1 className="plan__title">PREMIUM</h1>
                        <h2 className="plan__price">$99/month</h2>
                        <h3>Your enterprise solution.</h3>
                        <ul className="plan--features">
                            <li>10 Workspace</li>
                            <li>Unlimited Traffic</li>
                            <li>Unlimited Storage</li>
                            <li>Priority Support</li>
                        </ul>
                        <div>
                            <button className="button">CHOOSE PLAN</button>
                        </div>
                    </article>
                </div>
            </section>
            <section id="key-features">
                <h1 className="section-title">Many Good Reasons to Stick Around</h1>
                <ul className="key-features__list">
                    <li className="key-feature">
                        <div className="key-feature__img">
                            
                        </div>
                        <p className="key-feature__description">3,857,000 Trusting Customers</p>
                    </li>
                    <li className="key-feature">
                        <div className="key-feature__img">
                            
                        </div>
                        <p className="key-feature__description">99.999% Uptime Guarantee</p>
                    </li>
                    <li className="key-feature">
                        <div className="key-feature__img">
                            {/* <img src="alexander.jpg" width="128px" height="128px" border-radius="50%"> */}
                        </div>
                        <p className="key-feature__description">Lightning Fast CDN</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default LandingPage
