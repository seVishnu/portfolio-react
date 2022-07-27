import './index.scss'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters/index'

const About = () => {
  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                index={15}
                />
            </h1>
            <p>A very ambitious Professional who is keen on learning new stuff</p>
            <p>Quietly confident, naturally curious and maintains a problem solving mentality</p>
            <p>Passion driven individual with a knack for quality delivery</p>
        </div>
    </div>
  )
}

export default About