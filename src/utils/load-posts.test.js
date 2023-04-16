import { render, screen } from '@testing-library/react';
import { loadPosts } from './load-posts';


function checkImageUrl(url) {
  return fetch(url, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        let contentType = response.headers.get('content-type');
        if (contentType && contentType.startsWith('image/')) {
          return true;
        } else {
          return false;
        }
      } else {
        throw new Error('Erro ao carregar a imagem.');
      }
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}


test('getting data posts', () => {
  expect.assertions(1);
  return loadPosts(1, 8).then(data => expect(data.posts.length).toBe(8));
  //return expect(loadPosts(1, 8).posts.length).resolves.toBe(8);
});

describe("valid data return", () => {
  test("postQuantity is a number", () => {
    expect.assertions(1);
    return loadPosts(1, 8).then(data => {
      expect(typeof data.postQuantity).toBe("number")
    });
  });
  test("posts is a array with valid objects", () => {
    expect.assertions(6);
    return loadPosts(1, 8).then(data => {
      expect(typeof data.posts).toBe("object");
      expect(Array.isArray(data.posts)).toBe(true);
      expect(data.posts).not.toContain(null);
      expect(data.posts).not.toContain(undefined);
      expect(data.posts).not.toContain({});
      expect(typeof data.posts[0].photo).toBe("object");

    });
  });
  test("post images are valid", async () => {
    const [post] = (await loadPosts(1, 1)).posts;
    // const img = new Image();
    // let imgLoadedCorrectly;

    // img.onload = function () {
    //   imgLoadedCorrectly = true;
    // }
    // img.onerror = function () {
    //   imgLoadedCorrectly = false;
    // }
    // img.src = post?.photo?.src?.portrait;

    let validImageUrl = await checkImageUrl(post.photo.src.portrait);

    expect(validImageUrl).toBe(true)


  })
})

