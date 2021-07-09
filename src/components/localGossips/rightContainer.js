import React from 'react'

const RightContainer = ({imgSrc, title, subtitle, website, newsText}) => {
    return (
        <div className="testimonial" id="customer-2">
            <div className="testimonial__image-container">
                    <div className="testimonial__info">
                        <h1 className="testimonial__name">{title}</h1>
                        <h2 className="testimonial__subtitle">{subtitle}
                            <a href="https://www.facebook.com"> {website}</a>
                        </h2>
                        <p className="testimonial__text">{newsText}</p>
                    </div>
                <img src={imgSrc} alt="Taver crazy dude" className="testimonial__image"/>
            </div>
        </div>
    )
}

export default RightContainer
