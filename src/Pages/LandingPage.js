import React, { useState, useEffect } from 'react'
// import Backdrop from '../components/features/Backdrop'
import SectionOne from '../components/home/sectionOne'
import SectionTwo from '../components/home/sectionTwo'
import SectionThree from '../components/home/sectionThree'
import TimedPopup from '../components/Popup'
import { TimedPopupContent } from '../components/Popup/TimedPopupContent'



const  LandingPage = () => {
    const [popupState, setState] = useState(false)      // useState should remain true because of the pop info
    useEffect(()=> {
        setTimeout(() => {
        setState(false);
        }, 4000)
    }, []);
    return (
        <main>
            <TimedPopup trigger={() => setState(true)} state={popupState}>
                <TimedPopupContent />
            </TimedPopup>
            {/* <Backdrop /> */}
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </main>
    )
    
}

export default LandingPage
