import React from 'react';

class Project extends React.Component {
  render() {
    const { name, image, link } = this.props;
    return (
      <div className='Project'>
        <img
          className='project__img'
          src={image}
          alt={`Imagem do projeto ${name}`}
        />
        <div className='Project-Info project-info--blur'>
          <p className='image__title'>{name}</p>
          <a className='Link image__link' href={link}>
            Ver o projeto
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
