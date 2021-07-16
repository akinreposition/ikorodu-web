import React, { Fragment } from 'react'
import { dummyData } from '../components/localGossips/helper'
import Container from '../components/localGossips/Container'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
const LocalGossips = () => {
    return ( 
        <Fragment>
            <Navbar/>
            <div>
                {dummyData.map(data => (
                    <Container {...data} key={data.title}/>
                ))}
            </div>
            <Footer/>
        </Fragment>
     )
}

export default LocalGossips