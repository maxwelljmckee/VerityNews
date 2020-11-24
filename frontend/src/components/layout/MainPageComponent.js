import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Explore from '../mainPageComponents/Explore';


const MainPageComponent = () => {



  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/explore' component={Explore} />
          <Route path='/explore/:category' component={Explore}/>
        </Switch>
      </Router>
    </Fragment>
  )
}


export default MainPageComponent;