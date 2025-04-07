import React from 'react'

import logo from '../assets/imgs/logo.png'
import profile from '../assets/imgs/unnamed.png'

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { GrCircleQuestion } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";


function Header() {
  return (
    <div className='navbar'>
        <div className='navLogo'>
            <i><GiHamburgerMenu/></i>
            <img src={logo} alt="" />
        </div>
        <div className="navSearch">
            <i><IoMdSearch/></i>
            <input type="text"  placeholder='Search mail'/>
            <i><GiSettingsKnobs/></i>
        </div>
        <div className="navSettings">
            <i><GrCircleQuestion/></i>
            <i><MdOutlineSettings/></i>
            <i><TbGridDots/></i>
            <img src={profile} alt="" />
        </div>
    </div>
  )
}

export default Header