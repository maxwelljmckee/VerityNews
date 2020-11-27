import { fetch } from './csrf';


// DEFINE CONSTANTS //
const SET_ARTICLES = 'SET_ARTICLES';


// DEFINE ACTION CREATORS - ASYNC/THUNK //
export const fetchArticlesFromChannel = ({ channelId }) => async (dispatch) => {
  const res = await fetch(`/api/users/channels/${channelId}/articles`);
  // console.log('fetch result', res.data);
  if (res.data.length) dispatch(setArticles(res.data));
  return res;
}

export const fetchArticlesFromSource = ({ channelId }) => async (dispatch) => {
  const res = await fetch('/api/sources/:sourceId/articles');
}


// DEFINE ACTION CREATORS - SYNC //
const setArticles = (articles) => {
  return {
    type: SET_ARTICLES,
    articles
  }
}


// DEFINE REDUCER //
export const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return [...action.articles]
    default:
      return state;
  }
}