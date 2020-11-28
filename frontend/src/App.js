import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser, deleteSession } from './store/session';

import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Welcome from './components/welcome/Welcome';
import NotFound from './components/NotFound';
import Explore from './components/mainPageComponents/Explore';
import ArticlesIndex from './components/articles/ArticlesIndex';


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
        <Route path='/explore/:category' component={Explore} />
        <Route exact path='/explore' component={Explore}>
          { sessionUser ? <Explore /> : <Redirect to='/' />}
        </Route>
        <Route path='/login'>
          { sessionUser ? <Redirect to={`/explore`} /> : <LoginForm /> }
        </Route>
        <Route path='/logout' render={() => {
          dispatch(deleteSession());
          return <Redirect to='/' />
        }} />
        <Route path='/register'>
          {sessionUser ? <Redirect to={`/explore`} /> : <RegisterForm />}
        </Route>
        <Route path='/channels/:channelId' component={ArticlesIndex} />
        <Route path='/sources/:sourceEncoded' component={ArticlesIndex} />
        <Route exact path='/'>
          { sessionUser ? <Redirect to='/explore' /> : <Welcome /> }
        </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </Fragment>

  );
}


export default App;
