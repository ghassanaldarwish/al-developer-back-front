import * as actionType from "../actions/actionTypes";

const initialState = {
  posts: [],
  userPosts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionType.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case actionType.GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        loading: false
      };
    case actionType.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case actionType.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case actionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
