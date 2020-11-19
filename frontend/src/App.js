import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { restoreUser } from './store/session';
import LoginFormPage from './components/LoginFormPage';
import Splash from './components/Splash';
import NotFound from './components/NotFound';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  const sessionUser = useSelector(state => state.session.user)

  return (
    <React.Fragment>
      <h1>Hello world!</h1>
      <nav>
        <NavLink to='/login'>Login</NavLink>
      </nav>
      <Switch>
        <Route path='/login'>
          { sessionUser ? <Redirect to='/' /> : <LoginFormPage /> }
        </Route>
        <Route exact path='/' component={Splash} />
        <Route path='*' component={NotFound} />
      </Switch>
    </React.Fragment>

  );
}

export default App;
