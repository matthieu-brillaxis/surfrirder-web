const defaultState = {
  page: {
    pageData: {}
  },
  isLoading: false
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_PAGE_START':
      return {
        ...state,
        isLoading: true
      };

    case 'GET_PAGE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        page: {
          pageData: [...state.page.pageData, action.pageData]
        }
      };

    case 'GET_PAGE_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}
