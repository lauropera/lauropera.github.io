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
  development,
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
        <div style={{ minHeight: '64px' }}>
          <h2>{name}</h2>
          {development && (
            <p style={{ marginTop: '4px' }}>Em desenvolvimento</p>
          )}
        </div>
        <p style={{ fontSize: '18px', marginBottom: '6px' }}>{description}</p>
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
        {deployLink && (
          <a className='Link deploy-link' href={deployLink}>
            Aplicação
          </a>
        )}
        <a
          className={`Link repo-link ${!deployLink && 'deploy-link'}`}
          href={repositoryLink}
        >
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
