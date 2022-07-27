import './index.scss'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faBootstrap, faCss3, faGit, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout);
  }, [])
  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                index={15}
                letterClass={letterClass}
                />
            </h1>
            <p>A very ambitious Professional who is keen on learning new stuff</p>
            <p>Quietly confident, naturally curious and maintains a problem solving mentality</p>
            <p>Passion driven individual with a knack for quality delivery</p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                  <FontAwesomeIcon icon={faJs} color='#EFD81D' />
                </div>
                <div className='face2'>
                  <FontAwesomeIcon icon={faReact} color='#28A4D9' />
                </div>
                <div className='face3'>
                  <FontAwesomeIcon icon={faBootstrap} color='#563D7C' />
                </div>
                <div className='face4'>
                  <FontAwesomeIcon icon={faCss3} color='#5DE4F4' />
                </div>
                <div className='face5'>
                  <FontAwesomeIcon icon={faHtml5} color='#E34C26' />
                </div>
                <div className='face6'>
                  <FontAwesomeIcon icon={faGit} color='#EC4D28' />
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
    
  )
}

export default About