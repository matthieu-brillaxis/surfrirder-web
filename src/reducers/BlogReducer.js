const defaultState = {
  posts: [],
  isLoading: true,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_BLOG_POST_START':
      return {
        ...state,
      };

    case 'GET_BLOG_POST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        posts: action.posts,
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
