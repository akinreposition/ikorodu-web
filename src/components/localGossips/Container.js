import React from 'react';

const Container = ({imgSrc, title, subtitle, website, newsText, weblink}) => {
    
    return (
            <div className="testimonial" id= "customer-1">
                    <div className="testimonial__image-container">
                        <img src={imgSrc} alt="Headlingcontainer img left" className="testimonial__image"/>
                            <div className="testimonial__info">
                                <h1 className="testimonial__name">{title}</h1>
                                <h2 className="testimonial__subtitle"> {subtitle}@
                                    <a href={weblink}> {website}</a>
                                </h2>
                                <p className="testimonial__text">{newsText}</p>
                            </div>
                    </div>
        
                <div className="testimonial" id="customer-2">
                <div className="testimonial__image-container">
                    <div className="testimonial__info">
                        <h1 className="testimonial__name">{title}</h1>
                        <h2 className="testimonial__subtitle">{subtitle} @
                            <a href={weblink}>{website}</a>
                        </h2>
                        <p className="testimonial__text">{newsText}</p>
                    </div>
                    <img src={imgSrc} alt="Headline container img right" className="testimonial__image"/>
                </div>
            </div>
        </div>
    )
}

export default Container
