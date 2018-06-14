/* eslint-disable */

import axios from 'axios';
import { API_URL } from './../config/config';
import store from '../Store';

export const getPage = (url) => (dispatch) => {
  dispatch({
    type: 'GET_PAGE_START'
  })
  url = url.substr(1);

  axios.get(`${API_URL}/pages?slug=` + url)
    .then(function (response) {
      dispatch({
        type: 'GET_PAGE_SUCCESS',
        pageData: response.data[0]
      })
    })
    .catch(function (error) {
      dispatch({
        type: 'GET_PAGE_ERROR',
        error: error,
      })
    });
}
