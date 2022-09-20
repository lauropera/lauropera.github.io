import React from 'react';
import { string } from 'prop-types';
import '../styles/Projects.css'

function Project({ name, image, link, technologies, description }) {
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
        <a className='Link' href={link}>
          Ver o projeto
        </a>
      </div>
      <div>
        {/* {technologies.map((tech) => (
          <div>
            <h1>asd</h1>
          </div>
        ))} */}
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
