import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <section id="home" className="Hero">
        <div className="Hero-Content">
          <h1 h1>Olá.</h1>
        </div>
      </section>
      <section className="Intro-Text">
        <div>
          <p>
            Hey, sou o Lauro. Estou estudando desenvolvimento web! Aqui em baixo você
            pode ver os projetos que ando fazendo:
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
