import React from 'react'
// import { ReactComponent as NotFoundImage } from '../assets/404.svg'

const NotFound = () => {
  return (
    <div
      className='container not-found center-text'
      style={{ fontFamily: 'Josefin Sans' }}
    >
      <div className='not-found-50'>
        <h1 style={{ fontSize: '3rem' }}>Not Found</h1>
        <p className='lead'>The page you are looking for does not exist</p>
      </div>
      <div className='not-found-50'>
        {/* <NotFoundImage class='image-404' /> */}
      </div>
    </div>
  )
}

export default NotFound
