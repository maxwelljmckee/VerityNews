import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Explore from '../mainPageComponents/Explore';
import ArticlesIndex from '../articles/ArticlesIndex';


const MainPageComponent = () => {
  return (
    <div className='main__page__component'>
      <Router>
        <Switch>
          <Route path='/explore/:category' component={Explore} />
          <Route exact path='/explore' component={Explore} />
          <Route path='/channels/:channelId' component={ArticlesIndex} />
        </Switch>
      </Router>
    </div>
  )
}


export default MainPageComponent;