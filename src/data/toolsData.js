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
};

export default toolsData;
