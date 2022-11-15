import React from 'react';
import { BsCompassFill } from 'react-icons/bs';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTestinglibrary,
  SiJest,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiSequelize,
  SiMysql,
  SiDocker,
  SiSwagger,
  SiMocha,
  SiChai,
  SiAtom,
} from 'react-icons/si';

const toolsData = {
  html: {
    logo: <SiHtml5 />,
    name: 'HTML5',
  },
  css: {
    logo: <SiCss3 />,
    name: 'CSS',
  },
  javascript: {
    logo: <SiJavascript />,
    name: 'JavaScript',
  },
  reactJs: {
    logo: <SiReact />,
    name: 'React',
  },
  redux: {
    logo: <SiRedux />,
    name: 'Redux',
  },
  contextAPI: {
    logo: <SiReact />,
    name: 'Context API',
  },
  reactRouter: {
    logo: <BsCompassFill />,
    name: 'React Router v5',
  },
  rtl: {
    logo: <SiTestinglibrary />,
    name: 'RTL',
  },
  jest: {
    logo: <SiJest />,
    name: 'Jest',
  },
  nodeJs: {
    logo: <SiNodedotjs />,
    name: 'Node.js',
  },
  expressJs: {
    logo: <SiExpress />,
    name: 'Express.js',
  },
  typescript: {
    logo: <SiTypescript />,
    name: 'TypeScript',
  },
  sequelize: {
    logo: <SiSequelize />,
    name: 'Sequelize.js',
  },
  mysql: {
    logo: <SiMysql />,
    name: 'MySQL',
  },
  docker: {
    logo: <SiDocker />,
    name: 'Docker',
  },
  swagger: {
    logo: <SiSwagger />,
    name: 'Swagger',
  },
  mocha: {
    logo: <SiMocha />,
    name: 'Mocha',
  },
  chai: {
    logo: <SiChai />,
    name: 'Chai',
  },
  sinon: {
    logo: <SiAtom />,
    name: 'Sinon',
  },
};

export default toolsData;
