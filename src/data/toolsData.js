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
  react: {
    logo: <SiReact />,
    name: 'React.js',
  },
  redux: {
    logo: <SiRedux />,
    name: 'Redux',
  },
  reactRouter: {
    logo: <BsCompassFill />,
    name: 'React Router v5',
  },
  rtl: {
    logo: <SiTestinglibrary />,
    name: 'React Testing Library',
  },
  jest: {
    logo: <SiJest />,
    name: 'Jest.js',
  },
};

export default toolsData;
