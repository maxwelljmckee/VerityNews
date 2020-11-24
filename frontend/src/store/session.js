import { fetch } from './csrf';

// DEFINE CONSTANTS //
const SET_SESSION_USER = 'SET_SESSION_USER';
const REMOVE_SESSION_USER = 'REMOVE_SESSION_USER';
const REGISTER_USER = 'REGISTER_USER';


// DEFINE ACTION CREATORS - ASYNC/THUNK //
export const loginUser = (credential, password) => async (dispatch) => {
  const res = await fetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({ credential, password })
  })
  dispatch(setSessionUser(res.data.user));
  return res;
}

export const registerUser = (user) => async (dispatch) => {
  const { email, password, username } = user;
  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ email, password, username })
  })
  dispatch(setSessionUser(res.data.user));
  return res;
}

export const restoreUser = () => async (dispatch) => {
  const res = await fetch('/api/session');
  dispatch(setSessionUser(res.data.user));
  return res
}

export const deleteSession = () => async (dispatch) => {
  const res = await fetch('/api/session', {
    method: 'DELETE',
  })
  dispatch(removeSessionUser());
  return res
}

// DEFINE ACTION CREATORS - SYNC //
export const setSessionUser = (user) => {
  return {
    type: SET_SESSION_USER,
    user
  }
}

export const removeSessionUser = () => {
  return {
    type: REMOVE_SESSION_USER
  }
}


// DEFINE REDUCER //
export const sessionReducer = (state = { user: null }, action) => {
  let newState;
  switch (action.type) {
    case SET_SESSION_USER:
      newState = { ...state };
      newState.user = action.user;
      return newState
    case REMOVE_SESSION_USER:
      newState = { ...state };
      newState.user = null
      return newState;
    default:
      return state;
  }
}