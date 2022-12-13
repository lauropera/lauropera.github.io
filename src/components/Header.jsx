import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul className="Internal-Links">
          <li><a className="Link" href="#home">Home</a></li>
          <li><a className="Link" href="#projects">Projetos</a></li>
          <li><a className="Link" href="#about">Sobre</a></li>
          <li><a className="Link" href="#contact-me">Contato</a></li>
        </ul>
        <div className="Social-Medias">
          <a
            className="Social"
            href="https://www.github.com/lauropera"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="Icon" />
          </a>
          <a
            className="Social"
            href="https://www.linkedin.com/in/lauro-pereira-sr/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="Icon" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
