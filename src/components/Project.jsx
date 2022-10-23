import React from 'react';
import { string } from 'prop-types';
import '../styles/Projects.css';

function Project({
  name,
  image,
  deployLink,
  repositoryLink,
  technologies,
  description,
}) {
  return (
    <div className='Project'>
      <div className='Image-Container'>
        <img
          className='project__img'
          src={image}
          alt={`Imagem do projeto ${name}`}
        />
      </div>
      <div className='Project-Info'>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='Tools-Container'>
          {technologies.map((tech) => (
            <div className='Tool' key={tech.name}>
              <div>{tech.logo}</div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='Project-Link'>
        <a className='Link' href={deployLink}>
          Projeto
        </a>
        <a className='Link' href={repositoryLink}>
          Repositório
        </a>
      </div>
    </div>
  );
}

Project.defaultProps = {
  name: '',
  image: '',
  link: '',
};

Project.propTypes = {
  name: string,
  image: string,
  link: string,
};

export default Project;
