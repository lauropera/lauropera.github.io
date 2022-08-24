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
        <div className='Project-Info'>
          <h2>{name}</h2>
          <a className='Link' href={link}>
            Ver o projeto
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
