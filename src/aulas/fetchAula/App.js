import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsFetch = fetch("https://jsonplaceholder.typicode.com/posts")
    const imagesFetch = fetch("https://api.pexels.com/v1/search/?page=0&per_page=50&query=dog", {
      headers: {
        Authorization: "RZUilClUAopA89M1o2WlLhrzdMdJpbKDPzfWb0AW9IS9hBGyicS8m1kr"
      }
    })

    const [posts, images] = await Promise.all([postsFetch, imagesFetch]);

    const postJson = await posts.json();
    const imagesJson = await images.json();

    this.setState({ posts: postJson, images: imagesJson.photos })
  }

  render() {
    const { posts, images } = this.state;

    return (
      <div className='posts'>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <img className="post-image" src={images[index>49? index-50 : index]?.src?.portrait} alt={images[index>49? index-50 : index]?.title} />
            <h1 className="post-title">{post.title}</h1>
            <p className="post-text">{post.body}</p>
          </div>
        ))}
      </div>
    )

  }
}

export default App;
