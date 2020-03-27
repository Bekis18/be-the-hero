import React from 'react';
import Routes from './src/routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

/*
  <header> <footer> <div> <span> <p> <h1> - não usamos mais div's pra tudo por causa da semântica
  Para o React Native podemos usar '<div>'.
    
  REACT NATIVE

    "HTML" 
    Não tem semântica
    <View> é usado como div, footer, header, section e etc
    <Text> é usado como para qualquer tipo de texto 
   

    Estilo
    <StyleSheet> permite vc criar seus próprios estilos
    Todos os elementos possui display flex por padrão
    O estilo do React Native é em CamelCase
    No estilo vc precisa colocar aspas para atribuir valores String e n usa aspas em numeros
    Não existe herança de estilos no react native
    O estilo funciona como se fosse um objeto
*/

export default function App() {
  return (
    <Routes />
  );
}