import * as types from './types';

export const postsReducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(action);
      return { ...state, ...action.payload, loading: false, fail: false };
    }
    case types.POSTS_LOADING: {
      console.log(action);
      return { ...state, ...action.payload, loading: true, fail: false };
    }
    case types.POSTS_FAILED: {
      console.log(action);
      return { ...state, ...action.payload, posts: [], loading: false, fail: true };
    }
  }

  console.log(`action nao encontrada`, action.type)
  return { ...state };
};
