import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'components/home';
import { Movies } from 'components/movies';
import { Series } from 'components/series';
import { Layout } from 'components/layout';

export const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);
