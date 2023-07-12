import { useReducer } from 'react';
import { PostsContext } from './context';
import { data } from './data';
import { postsReducer } from './reducer';
import P from "prop-types";

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(postsReducer, data);

  return <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.node
}
