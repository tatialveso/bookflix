import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import './reset.css';
import styled from 'styled-components';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import PageDefault from './components/PageDefault';

const ErrorHeader = styled.h1`
  text-align: center;
  font-size: 200px;
  font-weight: bold;
  margin: 0;
  color: var(--primary);
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 30px;
`;

const ErrorPage = () => (
  <PageDefault>
    <ErrorHeader>404</ErrorHeader>
    <ErrorMessage>Ops... A página que você procura não existe. Tente novamente.</ErrorMessage>
  </PageDefault>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
