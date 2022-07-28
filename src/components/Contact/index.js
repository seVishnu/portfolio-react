import './index.scss'
import React, {useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(()=>{
        let timeout = setTimeout(()=>{
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout);
      }, [])
      const sendEmail = (e) =>{
        e.preventDefault();
            emailjs
            .sendForm(
                'service_sko2iaz', 
                'template_j0t4amf', 
                refForm.current,
                'ToxStw0XdGv2L0yIU'
            )
            .then((success)=>{
                alert('Mail Sent');
            })
            .catch((Err)=>{
                alert('Something went wrong!');
                window.location.reload(false);
            })
      }
  return (
   <>
   <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                                 index={15}
                                 letterClass={letterClass}/>
            </h1>
            <p>
                I am interested in anything related to computer science 
                and engineering, sometimes i think tech is the reason that makes the 
                world revolve
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text"  placeholder='Name' name="from_name" required />
                        </li>
                        <li className='half'>
                            <input type="email"  placeholder='Email' name="email_id" required />
                        </li>
                        <li>
                            <input type='text'name='subject' placeholder='Subject' required />
                        </li>
                        <li>
                            <textarea  placeholder='Message' name='message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='info-map'>
            Vishnu Sekhar 
            <br />
            India,
            <br />
            South street, DH
            <br />
            221 Baker Street
            <br />
            <span>vishnusekhar96@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[10.8505, 76.2711]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[10.8505, 76.2711]}>
              <Popup>Vishnu lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
   </div>
   <Loader type='pacman' />
   </>
  )
}

export default Contact