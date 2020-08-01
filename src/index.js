import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import './reset.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import ErrorPage from './pages/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Redirect to="/404" />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
