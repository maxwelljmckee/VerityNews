import { fetch } from './csrf';


// DEFINE CONSTANTS //
export const FETCH_SOURCES = 'FETCH_SOURCES';
export const SET_SOURCES = 'SET_SOURCES';


// DEFINE ACTION CREATORS - ASYNC/THUNK //
export const fetchSources = () => async (dispatch) => {
  const sources = await fetch('/api/sources');
  dispatch(setSources(sources.data))
  return sources;
}


// DEFINE ACTION CREATORS - SYNC //
const setSources = (sources) => {
  // console.log(sources);
  return {
    type: SET_SOURCES,
    sources
  }
}


// DEFINE REDUCER //
export const sourcesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SOURCES:
      return [...action.sources]
    default:
      return state;
  }
}
