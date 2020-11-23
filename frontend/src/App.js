import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser, deleteSession } from './store/session';

import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';
import Navbar from './components/layout/Navbar';
import UserProfile from './components/UserProfile';
import MainPageLayout from './components/layout/MainPageLayout';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  const sessionUser = useSelector(state => state.session.user)

  return isLoaded && (
    <Fragment>

      <Switch>
        {/* <Route path='/users/:id' component={UserProfile} /> */}
        <Route path='/explore' component={MainPageLayout} />
        <Route path='/login'>
          { sessionUser ? <Redirect to={`/users/${sessionUser.id}`} /> : <LoginForm /> }
        </Route>

        <Route path='/logout' render={() => {
          dispatch(deleteSession());
          return <Redirect to='/' />
        }} />

        <Route path='/register'>
          {sessionUser ? <Redirect to={`/users/${sessionUser.id}`} /> : <RegisterForm />}
        </Route>

        <Route exact path='/' component={Welcome} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Fragment>

  );
}


export default App;
