import projectsPreview from './projectsPreview';

const projectsData = [
  {
    id: 1,
    name: "Don't Trumps",
    screenshot: projectsPreview[0],
    description:
      "Jogo de cartas no estilo Super Trunfo inspirado em Don't Starve",
    technologies: ['html', 'css', 'javascript', 'reactJs', 'redux', 'reactRouter'],
    repositoryLink: 'https://github.com/lauropera/dont-trumps',
    deployLink: 'https://lauropera.github.io/dont-trumps',
    development: true,
  },
  {
    id: 2,
    name: 'Oceanfy',
    screenshot: projectsPreview[1],
    description: 'Aplicação para você ouvir suas músicas',
    technologies: ['html', 'css', 'javascript', 'reactJs', 'reactRouter'],
    repositoryLink: 'https://github.com/lauropera/oceanfy',
    deployLink: 'https://lauropera.github.io/oceanfy',
    development: false,
  },
  {
    id: 3,
    name: 'BeChef',
    screenshot: projectsPreview[2],
    description: 'Aplicativo mobile onde você aprende receitas',
    technologies:
      ['html', 'css', 'javascript', 'reactJs', 'contextAPI', 'rtl'],
    repositoryLink: 'https://github.com/lauropera/bechef',
    deployLink: 'https://lauropera.github.io/bechef',
    development: false,
  },
  {
    id: 4,
    name: 'Trivia',
    screenshot: projectsPreview[3],
    description: 'Jogo de perguntas e respostas, mais conhecido como Trivia',
    technologies: ['html', 'css', 'javascript', 'reactJs', 'redux'],
    repositoryLink: 'https://github.com/lauropera/trivia',
    deployLink: 'https://lauropera.github.io/trivia',
    development: false,
  },
  {
    id: 5,
    name: 'Wallet',
    screenshot: projectsPreview[4],
    description: 'Aplicação de carteira para você controlar seus gastos',
    technologies: ['html', 'css', 'javascript', 'reactJs', 'redux', 'reactRouter'],
    repositoryLink: 'https://github.com/lauropera/wallet',
    deployLink: 'https://lauropera.github.io/wallet',
    development: false,
  },
  {
    id: 6,
    name: 'Testes em React',
    screenshot: projectsPreview[5],
    description:
      'Projeto de testes unitários no React utilizando a React Testing Library(rtl)',
    technologies: ['reactJs', 'rtl', 'jest'],
    repositoryLink:
      'https://github.com/lauropera/tests-with-react-testing-library',
    deployLink: '',
    development: false,
  },
  {
    id: 7,
    name: 'Shopping Cart',
    screenshot: projectsPreview[6],
    description: 'Página que simula um carrinho de compras',
    technologies: ['html', 'css', 'javascript', 'jest'],
    repositoryLink: 'https://github.com/lauropera/shopping-cart',
    deployLink: 'https://lauropera.github.io/shopping-cart',
    development: false,
  },
];

export default projectsData;
