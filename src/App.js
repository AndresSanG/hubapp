import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import MainLaout from './components/Layouts/MainLaout';
import Followers from './views/Followers/Followers';

//STATES
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <MainLaout>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route path="/followers/:user" exact>
        <Followers/>
      </Route>
      </MainLaout>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
