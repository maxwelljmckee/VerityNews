import { fetch } from './csrf';

// DEFINE CONSTANTS //
const FETCH_CHANNELS = 'FETCH_CHANNELS'

// DEFINE ACTION CREATORS - ASYNC/THUNK //
export const fetchChannels = () => async (dispatch) => {
  const res = await fetch('')
}

// DEFINE ACTION CREATORS - SYNC //
// const setChannels = ({ channels })


// DEFINE REDUCER //
export const channelsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHANNELS:
      return [...state, ...action.channels]
    default:
      return state
  }
}