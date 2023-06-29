import * as types from './types';

export const postsReducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(action);
      return { ...state, posts: action.payload };
    }
  }

  console.log("action nao encontrada", action.type)
  return { ...state };
};
