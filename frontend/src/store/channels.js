import { fetch } from './csrf';

// DEFINE CONSTANTS //
const FETCH_CHANNELS = 'FETCH_CHANNELS';
const SET_CHANNELS = 'SET_CHANNELS';
const DELETE_CHANNEL = 'DELETE_CHANNEL';

// DEFINE ACTION CREATORS - ASYNC/THUNK //
export const postNewChannel = ({ name }) => async (dispatch) => {
  const res = await fetch('/api/users/channels', {
    method: 'POST',
    body: JSON.stringify({ name })
  });
  dispatch(setChannels(res.data));
}

export const fetchChannels = () => async (dispatch) => {
  const res = await fetch(`/api/users/channels`);
  if (res.data.length) dispatch(setChannels(res.data));
}

// DEFINE ACTION CREATORS - SYNC //
const setChannels = (channels) => {
  return {
    type: SET_CHANNELS,
    channels
  }
}


// DEFINE REDUCER //
export const channelsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHANNELS:
      return [...action.channels]
    default:
      return state
  }
}