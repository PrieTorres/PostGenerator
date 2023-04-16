export const loadPosts = async (page = 0, postPerPage = 8) => {
  const postsFetch = fetch("https://jsonplaceholder.typicode.com/posts")
  const imagesFetch = fetch(`https://api.pexels.com/v1/search/?page=${page}&per_page=${postPerPage}&query=dog`, {
    headers: {
      Authorization: "RZUilClUAopA89M1o2WlLhrzdMdJpbKDPzfWb0AW9IS9hBGyicS8m1kr"
    }
  })

  const [posts, images] = await Promise.all([postsFetch, imagesFetch]);

  const postJson = await posts.json();
  const imagesJson = await images.json();

  const photos = imagesJson.photos;

  const postsAndPhotos = photos.map((photo, i) => {
    return { ...postJson[i], photo }
  });

  return {posts: postsAndPhotos, postQuantity: parseInt(postJson.length)};
}