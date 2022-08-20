import React, {useState} from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
import './ResponsiveNav.css'

export default function Navbar() {
    const [navbarState, setnavbarState] = useState(false)
    return (
        <>
            <div className='navbar' id='navbar'>
                <div className='brand'>
                    <div className='container'>
                        <img className='img' src={logo} alt='' />
                        Tourest
                    </div>
                    <div className='toggle'>
                        {navbarState ? 
                        <VscChromeClose onClick={()=>setnavbarState(false)}/> 
                        : <GiHamburgerMenu onClick={()=>setnavbarState(true)}/>}
                    </div>
                </div>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#About'>About Us</a></li>
                    <li><a href='#Airlines'>Privacy Policy</a></li>
                    <li><a href='#Destinations'>Contact Us</a></li>
                </ul>
                <button className='connect'>Connect</button>
            </div>
            <div 
            className={navbarState ? 'responsiveNav' : 'removeResponsiveNav'} 
            style={navbarState ? {top:'50px'}:{top:'-400px'}}>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#About' >About Us</a></li>
                    <li><a href='#Airlines'>Privacy Policy</a></li>
                    <li><a href='#Destinations' >Contact Us</a></li>
                </ul>
            </div>
    </>
    )
}
