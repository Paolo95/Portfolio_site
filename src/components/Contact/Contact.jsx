import React, {useRef} from 'react'
import './contact.css'
import {Envelope, Whatsapp, Instagram} from 'react-bootstrap-icons'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [email, setEmail] = useState('');
    const [isRECAPTCHA, setRECAPTCHA] = useState(false);
    const validPassword = new RegExp(/^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+\.)+[a-z]{2,5}$/);

    const onChange = () =>{
        setRECAPTCHA(true);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if(validPassword.test(email)){
    
            emailjs.sendForm('service_snbn3lc', 'template_o3vzagh', form.current, 'AnyobiWOF9X3MbiYr')
            .then(() => {
                setIsSent(true);
                setHasError(false);
            }, (error) => {
                alert('Messaggio non inviato, errore nel server: ' + error)
            });

            e.target.reset();
        }else{
            setHasError(true);
            setIsSent(false);
            e.target.reset();
        }
        
      };

  return (
    <section className="contact" id='contact'>
        
        <h2>Contattami</h2>
        <div className="container contact-container">
            <div className="contact-options">
                <article className='contact-option'>
                    <Envelope className='contact-option-icon'/>
                    <h4>Email</h4>
                    <h5>compagnonipaolo95@gmail.com</h5>
                    <a href="mailto:compagnonipaolo95@gmail.com" target='_blank' rel='noreferrer'>Mandami un messaggio!</a>
                </article>
                <article className='contact-option'>
                    <Instagram className='contact-option-icon'/>
                    <h4>Instagram</h4>
                    <h5>paolo__compagnoni</h5>
                    <a href="https://www.instagram.com/paolo__compagnoni/">Visita il mio profilo!</a>
                </article>
                <article className='contact-option'>
                    <Whatsapp className='contact-option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>3397619766</h5>
                    <a href="https://api.whatsapp.com/send?phone=3397619766">Mandami un messaggio!</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                {
                    isSent ? <span className='messageSent show'>Messaggio inviato!</span>
                           : <span className='messageSent'>Messaggio inviato!</span>
                }

{
                    hasError ? <span className='errorMsg show'>Mail non valida, riprova!</span>
                           : null
                }
                
                <input type="text"
                       name='name' 
                       placeholder='Nome e cognome...' 
                       onFocus={(e) => e.target.placeholder = ''}
                       onBlur={(e) => e.target.value !== '' ? 
                                        e.target.placeholder = '' : 
                                        e.target.placeholder = 'Nome e cognome...'}
                       required/>

                <input type="text" 
                       name='email' 
                       placeholder='La tua email...' 
                       onFocus={(e) => e.target.placeholder = ''}
                       onBlur={(e) => e.target.value !== '' ? 
                                        e.target.placeholder = '' : 
                                        e.target.placeholder = 'La tua email...'}
                       onChange={(e) => setEmail(e.target.value)}
                       required/>

                <textarea name='message' 
                          rows={7} 
                          placeholder='Il tuo messaggio...'
                          onFocus={(e) => e.target.placeholder = ''}
                          onBlur={(e) => e.target.value !== '' ? 
                                        e.target.placeholder = '' : 
                                        e.target.placeholder = 'Il tuo messaggio...'}
                          required>
                </textarea>

                <ReCAPTCHA 
                    sitekey='6LdCskUkAAAAAEia-yw7XaehibhYXyVN7OOrFMpJ'
                    onChange={onChange}/>
                {
                    isRECAPTCHA ? <button type='submit' className='btn btn-primary'>Invia messaggio</button>
                                : <button disabled type='submit' className='btn btn-primary disabled'>Invia messaggio</button>
                }
                
            </form>
        </div>
    </section>
  )
}

export default Contact