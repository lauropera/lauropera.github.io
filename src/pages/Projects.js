import React from 'react';
import dontTrumps from '../assets/projetos/dont-trumps-preview.png';
import trybetunes from '../assets/projetos/trybetunes-preview.png';
import shoppingCart from '../assets/projetos/shopping-cart-preview.png';
import toDoList from '../assets/projetos/todo-list-preview.png';
import trybewarts from '../assets/projetos/trybewarts-preview.png';

import '../styles/Projects.css';

function Projects() {
  const goTo = 'Ver o projeto';
  return (
    <section id="projects" className="Projects-Area">
      <div className="Projects-Container">
        <div className="Project">
          <img
            className="project__img"
            src={ dontTrumps }
            alt="Imagem do projeto Don't Trumps"
          />
          <div className="Project-Info project-info--blur">
            <p className="image__title">Don&apos;t Trumps</p>
            <a
              className="Link image__link"
              href="https://lauropera.github.io/dont-trumps/"
            >
              Ver o projeto
            </a>
          </div>
        </div>
        <div className="Project">
          <img
            className="project__img"
            src={ trybetunes }
            alt="Imagem do projeto Trybetunes"
          />
          <div className="Project-Info project-info--blur">
            <p className="image__title">Trybetunes</p>
            <a className="Link image__link" href="https://lauropera.github.io/">
              {goTo}
            </a>
          </div>
        </div>
        <div className="Project">
          <img
            className="project__img"
            src={ shoppingCart }
            alt="Imagem do projeto Shopping Cart "
          />
          <div className="Project-Info project-info--blur">
            <p className="image__title">Shopping Cart</p>
            <a
              className="Link image__link"
              href="https://lauropera.github.io/shopping-cart"
            >
              {goTo}
            </a>
          </div>
        </div>
        <div className="Project">
          <img
            className="project__img"
            src={ toDoList }
            alt="Imagem do projeto To Do List "
          />
          <div className="Project-Info project-info--blur">
            <p className="image__title">To Do List</p>
            <a
              className="Link image__link"
              href="https://lauropera.github.io/todo-list"
            >
              {goTo}
            </a>
          </div>
        </div>
        <div className="Project">
          <img
            className="project__img"
            src={ trybewarts }
            alt="Imagem do projeto Trybewarts "
          />
          <div className="Project-Info project-info--blur">
            <p className="image__title">Trybewarts</p>
            <a
              className="Link image__link"
              href="https://lauropera.github.io/trybewarts"
            >
              {goTo}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
