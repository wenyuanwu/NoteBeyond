
import { Route, Redict, Switch, Link, HashRouter } from 'react-router-dom';
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HomePageContainer from './home_page/home_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
   <header>
   	<GreetingContainer/>  
   </header>

   <Switch>
   <AuthRoute path="/login" component={SessionFormContainer} />
   <AuthRoute path="/signup" component={SessionFormContainer} />
   <ProtectedRoute path="/" component={HomePageContainer} />
   </ Switch>

  </div>
);

export default App;