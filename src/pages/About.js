import React from 'react';
import myPicture from '../assets/pictures/pp.png';
import '../styles/About.css';

function About() {
  return (
    <section className="About">
      <div className="Picture-Container">
        <img src={ myPicture } alt="Minha foto" />
      </div>
      <div id="about" className="About-Me">
        <h2>Sobre mim</h2>
        <p>
          Eu tenho 19 anos, nasci e moro na capital de São Paulo. Assim que
          terminei o ensino médio eu estava entre ser professor ou biólogo
          marinho, mas quando conheci oque a programação pode fazer eu vi que
          consigo relacionar essas duas vontades! E quem está me ajudando a entrar
          nesse mundo da programação é a
          {' '}
          <strong>
            <a
              className="Trybe-Link"
              href="https://betrybe.com/"
              target="_blank"
              rel="noreferrer"
            >
              Trybe
            </a>
          </strong>
          , uma escola que te ensina a programar.
        </p>
      </div>
    </section>
  );
}

export default About;
