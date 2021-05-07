import React from 'react'

import useWindowListener from '../hooks/akin__useWindowListener'
import { MobileNavigation } from './mobileNavigation'
import { DesktopNavbar } from './desktopNavigation'

const Navbar = ({ icon }) => {
  const [width] = useWindowListener()
  return <div>{width <= 500 ? <MobileNavigation /> : <DesktopNavbar />}</div>
}

export default Navbar
