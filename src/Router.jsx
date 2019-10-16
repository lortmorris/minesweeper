import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';

import Layout from './components/Layout';
import NotFound404 from './components/NotFound404';
import Home from './containers/Home';

const wrappedRoutes = () => (
  <div>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={wrappedRoutes} />
        <Route path="/404" component={NotFound404} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
