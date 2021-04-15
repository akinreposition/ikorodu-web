import React from 'react'
import Backdrop from '../components/features/backdrop'
// import Customer1 from '../assets/customer1.jpg'
// import Customer2 from '../assets/customer2.jpg'
import Cynthia from '../assets/cynthia.jpg'
import Taver from '../assets/taver.jpg'

const News = () => {
    return (
        <div>
            <Backdrop />
           <div className="testimonial" id="customer-1">
                <div className="testimonial__image-container">
                    <img src={Cynthia} alt="Cynthia - customer" className="testimonial__image"/>
                    <div className="testimonial__info">
                    <h1 className="testimonial__name">Cynthia Blue</h1>
                    <h2 className="testimonial__subtitle"> Front-end Engineer @
                        <a href="semicolon.africa"> semicolon.africa</a>
                    </h2>
                    <p className="testimonial__text">Fashionista with a great eye for beauty</p>
                </div>
                </div>
                {/* <div className="testimonial__info">
                    <h1 className="testimonial__name">Cynthia Blue</h1>
                    <h2 className="testimonial__subtitle"> Front-end Engineer @
                        <a href="semicolon.africa"> semicolon.africa</a>
                    </h2>
                    <p className="testimonial__text">Fashionista with a great eye for beauty</p>
                </div> */}
           </div>
           <div className="testimonial" id="customer-2">
               <div className="testimonial__image-container">
               <div className="testimonial__info">
                    <h1 className="testimonial__name">Taver Mellow</h1>
                    <h2 className="testimonial__subtitle">Cyber-Security expert.</h2>
                    <p className="testimonial__text">I worked as a cyber security expert
                     and a Data Engineer.</p>
                </div>
                    <img src={Taver} alt="Taver crazy dude" className="testimonial__image"/>
               </div>
                {/* <div className="testimonial__info">
                    <h1 className="testimonial__name">Taver Mellow</h1>
                    <h2 className="testimonial__subtitle">Cyber-Security expert.</h2>
                    <p className="testimonial__text">I worked as a cyber security expert
                     and a Data Engineer.</p>
                </div> */}
           </div>
        </div>
    )
}

export default News
