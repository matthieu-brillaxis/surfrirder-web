import axios from 'axios';
import { API_MENU_URL } from './../config/config';

export const getMenu = () => (dispatch) => {
  dispatch({
    type: 'GET_MAIN_MENU_START'
  })

  axios.get(`${API_MENU_URL}/menus/2`)
    .then(function (response) {
      dispatch({
        type: 'GET_MAIN_MENU_SUCCESS',
        mainMenu: response.data
      })
    })
    .catch(function (error) {
      dispatch({
        type: 'GET_MAIN_MENU_ERROR',
        error: error,
      })
    });
}
