
import React from 'react'
import './header.css';

function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src="./nature.jpg" alt="" />
        </div>
    )
}

export default Header
