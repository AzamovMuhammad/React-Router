import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className='navbar'>
        <div className='navLogo'>
            <GiHamburgerMenu/>
        </div>
    </div>
  )
}

export default Header