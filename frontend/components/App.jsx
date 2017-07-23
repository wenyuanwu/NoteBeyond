
import { Route, Redict, Switch, Link, HashRouter } from 'react-router-dom';
import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import HomePageContainer from './home_page/home_page_container';
import NoteCreateContainer from './note_create/note_create_container';
import NoteDeleteContainer from './note_delete/note_delete_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
  
   <Switch>
   <AuthRoute path="/login" component={SessionFormContainer} />
   <AuthRoute path="/signup" component={SessionFormContainer} />
   <ProtectedRoute exact path="/createnote" component={NoteCreateContainer} />
   <ProtectedRoute exact path="/deletenote" component={NoteDeleteContainer} />
   <ProtectedRoute path="/" component={HomePageContainer} />

   </ Switch>

  </div>
);

export default App;