import React from 'react';

import './global.css';

import Routes from './routes';

/**
 * Não é necessário buscar o arquivo do componente a ser lido,
 * uma vez que toda vez que importamos uma pasta, o Javascript nos retorna 
 * o arquivo que está nomeado como "index.js".
 */

// JSX (Javascript XML)

function App() {

  return ( 
    <Routes />
  );
}

export default App;
