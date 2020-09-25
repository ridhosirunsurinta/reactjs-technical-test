import { GET_REPO } from './github.types';

const initialState = {
  repos: null
};

export const githubReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case GET_REPO:
      return {
        ...state,
        repos: payload
      }
    default:
      return state;
  }
};