import React, { Fragment } from 'react'
import { dummyData } from '../components/localGossips/helper'
import LeftContainer from '../components/localGossips/leftContainer'
// import Container from '../components/localGossips/index'
const LocalGossips = () => {
    return ( 
        <Fragment>
            <div>
                {dummyData.map(data => (
                    <LeftContainer {...data} key={data.title}/>
                ))}
            </div>
        </Fragment>
     )
}

export default LocalGossips