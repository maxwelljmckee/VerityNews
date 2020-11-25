import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { sessionReducer } from './session';
import { channelsReducer } from './channels';
import { sourcesReducer } from './sources';
import { channelSourcesReducer } from './channelSources';


let enhancer;
if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const rootReducer = combineReducers({
  session: sessionReducer,
  sources: sourcesReducer,
  channels: channelsReducer,
  channelSources: channelSourcesReducer
});


const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;