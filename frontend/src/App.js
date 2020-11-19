import React, { useState, useEffect } from 'react';
import { NavLink, Link, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { restoreUser, deleteSession } from './store/session';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Splash from './components/Splash';
import NotFound from './components/NotFound';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  const sessionUser = useSelector(state => state.session.user)

  return isLoaded && (
    <React.Fragment>
      <h1>Hello world!</h1>
      <nav>
        <NavLink to ='/register'>Sign Up</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <Link to='/logout'>Logout</Link>
      </nav>

      <Switch>
        <Route path='/login'>
          { sessionUser ? <Redirect to='/' /> : <LoginForm /> }
        </Route>
        <Route path='/logout' render={() => {
          dispatch(deleteSession());
          return <Redirect to='/' />
        }} />
        <Route path='/register'>
          {sessionUser ? <Redirect to='/' /> : <RegisterForm />}
        </Route>

        <Route exact path='/' component={Splash} />
        <Route path='*' component={NotFound} />
      </Switch>
    </React.Fragment>

  );
}

export default App;
