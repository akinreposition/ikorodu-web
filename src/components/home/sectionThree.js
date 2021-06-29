import React from 'react'
import battery from '../../assets/svgs/battery.svg'
import compressor from '../../assets/svgs/compressor.svg'

const SectionThree = () => {
    return (
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
    )
}

export default SectionThree
