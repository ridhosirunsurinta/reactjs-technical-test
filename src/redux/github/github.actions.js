import axios from 'axios';
import { GET_REPO } from './github.types';

export const getGithubRepoByUsername = username => async dispatch => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);

    dispatch({
      type: GET_REPO,
      payload: res.data
    })

  } catch (error) {
    console.log(error)
  }
} 