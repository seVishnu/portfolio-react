import './index.scss'
import React, { useState, useEffect } from 'react'
// import Image from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ', 'V', 'i', 's', 'h', 'n', 'u', ' ', 'S', 'e', 'k', 'h', 'a', 'r'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout);
  }, [])
  return (
    <div className='container home-page'>
       <div className='text-zone'>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>I,</span>  
        <br />
        <span className={`${letterClass} _13`}>I</span> 
        <span className={`${letterClass} _14`}>'m</span>  
        {/* <img src={Image} alt='developer'/> */}
       <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22}/>
        </h1>
        <h2>Javascript/ Typescript/ ReactJs/ C++</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
       </div>
       <Logo />
    </div>
  )
}

export default Home