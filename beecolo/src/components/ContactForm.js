import React, { useState, useRef } from 'react';
import style from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeMessage(e) {
    setMessage(e.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_YOUR_SERVICE_ID,
      process.env.REACT_APP_YOUR_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_YOUR_PUBLIC_KEY
    );

    toast(
      'Merci de votre partage, nous reviendrons vers vous le plus rapidement possible !',
      {
        theme: 'dark',
        type: 'success',
        position: 'bottom-center',
      }
    );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">
          <input
            onChange={handleChangeName}
            value={name}
            name="name"
            id="name"
            type="text"
            placeholder="Bee Geez"
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="email">
          <input
            onChange={handleChangeEmail}
            value={email}
            name="email"
            id="email"
            type="email"
            placeholder="stayingalive.com"
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="message">
          <textarea
            onChange={handleChangeMessage}
            value={message}
            name="message"
            id="message"
            rows="10"
            type="text"
            placeholder="Dites nous tout."
            required
          />
        </label>
        <br />
        <br />
        <button type="submit" className={style.submitBtn}>
          Envoyer
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default ContactForm;
