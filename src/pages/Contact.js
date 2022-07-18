import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact-me" className="Contact-Area">
      <div className="Informations">
        <h2>Quer entrar em contato?</h2>
        <p>Caso queira mandar qualquer mensagem, use esse área abaixo</p>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
