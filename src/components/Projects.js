import React from 'react';
import Project from './Project';
import projectsData from '../data/projectsData';
import '../styles/Projects.css';

import toolsData from '../data/toolsData';

function Projects() {
  const getTechnologiesIcons = (techs) =>
    techs.map((tech) => toolsData[tech]);

  return (
    <section id='projects' className='Projects-Area'>
      <div className='Projects-Container'>
        {projectsData.map(
          ({ id, name, description, screenshot, deployLink, repositoryLink, technologies }) => (
            <Project
              key={id}
              name={name}
              description={description}
              image={screenshot}
              deployLink={deployLink}
              repositoryLink={repositoryLink}
              technologies={getTechnologiesIcons(technologies)}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
