const defaultState = {
  menu: {
    mainMenu:{},
  },
  isLoading: false,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_MAIN_MENU_START':
      return {
        ...state,
        isLoading: true,
      };

    case 'GET_MAIN_MENU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        menu: {
          mainMenu: action.mainMenu,
        },
      };

    case 'GET_MAIN_MENU_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
