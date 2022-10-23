import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <section id="home" className="Hero">
        <div className="Hero-Content">
          <h1>Olá.</h1>
          <a className='CV-Link' href='https://drive.google.com/file/d/1-X6kLZQyrNkJVLRl8fItC7vyfrxIVhgJ/view'>Baixar CV</a>
        </div>
      </section>
      <section className="Intro-Text">
        <div>
          <p>
            Hey, sou o Lauro. Estou estudando desenvolvimento web! Aqui em baixo você
            pode ver alguns projetos que fiz:
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
