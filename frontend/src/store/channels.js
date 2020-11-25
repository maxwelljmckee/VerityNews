import { fetch } from './csrf';

// DEFINE CONSTANTS //
const SET_CHANNELS = 'SET_CHANNELS';

// DEFINE ACTION CREATORS - ASYNC/THUNK //
export const postNewChannel = ({ name }) => async (dispatch) => {
  const res = await fetch('/api/users/channels', {
    method: 'POST',
    body: JSON.stringify({ name })
  });
  dispatch(setChannels(res.data));
  return res;
}

export const fetchChannels = () => async (dispatch) => {
  const res = await fetch(`/api/users/channels`);
  if (res.data.length) dispatch(setChannels(res.data));
  return res;
}

export const deleteChannel = ({ channelId, idx }) => async (dispatch) => {
  const res = await fetch('/api/users/channels', {
    method: 'DELETE',
    body: JSON.stringify({ channelId })
  })
  dispatch(setChannels(res.data))
  return res;
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
  let newState;
  switch (action.type) {
    case SET_CHANNELS:
      newState = [...action.channels];
      return newState
    default:
      return state
  }
}