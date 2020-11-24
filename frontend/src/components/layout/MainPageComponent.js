import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Explore from '../mainPageComponents/Explore';


const MainPageComponent = () => {
  return (
    <div className='main__page__component'>
      <Router>
        <Switch>
          <Route exact path='/explore' component={Explore} />
          <Route path='/explore/:category' component={Explore} />
        </Switch>
      </Router>
    </div>
  )
}


export default MainPageComponent;