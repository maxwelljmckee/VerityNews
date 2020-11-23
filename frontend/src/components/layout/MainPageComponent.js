import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const MainPageComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path='/explore' component={Explore} />
        <Route path='/explore/:category' component={Explore}/>
      </Switch>
    </Router>
  )
}


export default MainPageComponent;