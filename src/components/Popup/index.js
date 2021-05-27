import React from 'react'
const TimedPopup = ({ trigger, state, children }) => {
    // const [TimedPopup, setTimedPopup] = useState(false);

  return state ? (
    <div className='popup-layout'>
      <div className='popup-main' onClick={trigger}></div>
      <div className='pop-inner'>{children}</div>
    </div>
  ) : (
    ''
  )
}

export default TimedPopup
