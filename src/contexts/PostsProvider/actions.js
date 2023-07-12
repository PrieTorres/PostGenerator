import * as types from './types';

export const loadPosts = async (dispatch, page = 0, postPerPage = 10) => {
  dispatch({ type: types.POSTS_LOADING });
  const postsFetch = fetch(`https://jsonplaceholder.typicode.com/posts`);
  const imagesFetch = fetch(
    `https://api.pexels.com/v1/search/?page=${page}&per_page=${postPerPage}&query=dog`,
    {
      headers: {
        Authorization:
          `RZUilClUAopA89M1o2WlLhrzdMdJpbKDPzfWb0AW9IS9hBGyicS8m1kr`,
      },
    },
  );

  const [posts, images] = await Promise.all([postsFetch, imagesFetch]);

  const postJson = await posts.json();
  const imagesJson = await images.json();

  const photos = imagesJson.photos;

  const postsAndPhotos = photos.map((photo, i) => {
    return { ...postJson[i], photo };
  });

  const data = {
    posts: postsAndPhotos,
    postQuantity: parseInt(postJson.length),
  };

  dispatch({ type: types.POSTS_SUCCESS, payload: data });
  if(!data || !data?.posts?.length) dispatch({ type: types.POSTS_FAILED });
};
