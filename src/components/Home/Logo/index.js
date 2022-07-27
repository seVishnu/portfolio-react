import './index.scss'
import React from 'react'
import LogoV from '../../../assets/images/v.png'

const Logo = () => {
  return (
    <div className='logo-container'>
        <img className='solid-logo' src={LogoV} alt='logo'/>
    </div>
  )
}

export default Logo