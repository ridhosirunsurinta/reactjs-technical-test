import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHome from './pages/page-home.component';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={PageHome}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
