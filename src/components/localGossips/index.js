import React from 'react'
import LeftContainer from './leftContainer'
import RightContainer from './rightContainer';

const index = () => {
    const id1 = document.querySelector('customer-1');
    const id2 = document.querySelector('customer-2')

    if (id1){
        return <LeftContainer />
    }else if(id2){
        return <RightContainer />
    }
    
}

export default index
