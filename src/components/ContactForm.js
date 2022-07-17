import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

function ContactForm() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_sbdvkwg', 'template_fmcabbe', form.current, 'icvHYLrYBFaOhS_oI')
      .then(
        (result) => { console.log(result.text); },
        (error) => { console.log(error.text); },
      );
    e.target.reset();
  }

  return (
    <form ref={ form } onSubmit={ sendEmail }>
      <input type="text" name="name" placeholder="Nome" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Assunto" required />
      <textarea
        name="message"
        rows="5"
        cols="38"
        maxLength="500"
        placeholder="Mensagem"
        required
      />
      <button className="Submit-Btn" type="submit">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
