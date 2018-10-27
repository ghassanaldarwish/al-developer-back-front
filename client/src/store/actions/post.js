import * as actionType from "./actionTypes";
import axios from "axios";

export const addPost = (postData, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/post", postData)
    .then(res => {
      dispatch({
        type: actionType.ADD_POST,
        payload: res.data
      });
      history.push("/posts-private");
    })
    .catch(err =>
      dispatch({
        type: actionType.GET_ERRORS,
        payload: err.response
      })
    );
};

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/post")
    .then(res =>
      dispatch({
        type: actionType.GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actionType.GET_POSTS,
        payload: null
      })
    );
};

export const getUserPosts = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/post/user-posts/" + id)
    .then(res =>
      dispatch({
        type: actionType.GET_USER_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actionType.GET_USER_POSTS,
        payload: null
      })
    );
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/post/${id}`)
    .then(res =>
      dispatch({
        type: actionType.GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actionType.GET_POST,
        payload: null
      })
    );
};

// Delete Post
export const deletePost = (id, history) => dispatch => {
  axios
    .delete(`/api/post/${id}`)
    .then(res => {
      history.push("/my-own-posts");
      dispatch({
        type: actionType.DELETE_POST,
        payload: id
      });
    })
    .catch(err =>
      dispatch({
        type: actionType.GET_ERRORS,
        payload: err.response
      })
    );
};

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`/api/post/like/${id}`)
    .then(res => {
      dispatch(getPosts());
    })
    .catch(err =>
      dispatch({
        type: actionType.GET_ERRORS,
        payload: err.response
      })
    );
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/post/unlike/${id}`)
    .then(res => {
      dispatch(getPosts());
    })
    .catch(err =>
      dispatch({
        type: actionType.GET_ERRORS,
        payload: err.response
      })
    );
};

// Add Comment
export const addComment = (postId, commentData, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/post/comment/${postId}`, commentData)
    .then(res => {
      dispatch({
        type: actionType.GET_POST,
        payload: res.data
      });

      history.push("/post/" + postId);
    })
    .catch(err =>
      dispatch({
        type: actionType.GET_ERRORS,
        payload: err.response
      })
    );
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/post/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: actionType.GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actionType.GET_ERRORS,
        payload: err.response
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: actionType.POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS
  };
};
