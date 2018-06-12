const defaultState = {
  blogs: [],
  isLoading: false,
};

export default function mapState(state = defaultState, action) {
  switch (action.type) {
    case 'GET_BLOG_POST_START':
      return {
        ...state,
        isLoading: true,
      };

    case 'GET_BLOG_POST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        places: action.places,
      };

    case 'GET_BLOG_POST_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
