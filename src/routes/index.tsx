import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/auth/SignIn';

import Home from '../pages/Home';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route path="/home" component={Home} isPrivate />
    </Switch>
  );
};

export default routes;
