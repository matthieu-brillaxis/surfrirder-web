import axios from 'axios';
import { API_URL } from './../config/config';

export const getBlog = () => (dispatch) => {
  dispatch({
    type: 'GET_BLOG_POST_START'
  })

  axios.get(`${API_URL}/blogs`)
    .then(function (response) {
      dispatch({
        type: 'GET_BLOG_POST_SUCCESS',
        posts: response
      })
    })
    .catch(function (error) {
      dispatch({
        type: 'GET_BLOG_POST_ERROR',
        error: error,
      })
    });
}
