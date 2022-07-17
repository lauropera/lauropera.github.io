import React from 'react';
import Project from '../components/Project';
import dontTrumps from '../assets/projetos/dont-trumps-preview.png';
import trybetunes from '../assets/projetos/trybetunes-preview.png';
import shoppingCart from '../assets/projetos/shopping-cart-preview.png';
import toDoList from '../assets/projetos/todo-list-preview.png';
import trybewarts from '../assets/projetos/trybewarts-preview.png';

import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="Projects-Area">
      <div className="Projects-Container">
        <Project
          name="Don't Trumps"
          image={dontTrumps}
          link="https://lauropera.github.io/dont-trumps/"
        />
        <Project
          name="Trybetunes"
          image={trybetunes}
          link="https://lauropera.github.io/trybetunes/"
        />
        <Project
          name="Shopping Cart"
          image={shoppingCart}
          link="https://lauropera.github.io/shopping-cart/"
        />
        <Project
          name="To Do List"
          image={toDoList}
          link="https://lauropera.github.io/todo-list/"
        />
        <Project
          name="Trybewarts"
          image={trybewarts}
          link="https://lauropera.github.io/trybewarts/"
        />
      </div>
    </section>
  );
}

export default Projects;
