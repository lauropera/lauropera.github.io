import React from 'react';
import Project from '../components/Project';
import projectsData from '../data/projectsData';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id='projects' className='Projects-Area'>
      <div className='Projects-Container'>
        {projectsData.map(
          ({ id, name, description, screenshot, deployLink }) => (
            <Project
              key={id}
              name={name}
              description={description}
              image={screenshot}
              link={deployLink}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
