import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "titulo 1",
        body: "corpo da mensagem 1"
      },
      {
        id: 2,
        title: "titulo 2",
        body: "corpo da mensagem 2"
      },
      {
        id: 3,
        title: "titulo 3",
        body: "corpo da mensagem 3"
      },
      {
        id: 4,
        title: "titulo 4",
        body: "corpo da mensagem 4"
      },
      {
        id: 5,
        title: "titulo 5",
        body: "corpo da mensagem 5"
      },
    ]
  }

  componentDidMount() {
    // quando o componente tiver sido montado na tela, só é executado uma vez
    // chamado após uma troca de estado
    // aqui costumam ocorrer a buscas por api
    // pode chamar o setstate aqui que vai trocar o estado imediatamente

  }

  componentDidUpdate() {
    // chamado depois do componentdidmouth
    // pode receber prevProps e prevState
  }

  componentWillUnmount() {
    // quando o componente for ser desmontado
    // NAO SETA STATE
    
  }

  // (acima) o componente foi montado, atualizado e desmontado

  render() {
    const { posts } = this.state;

    return (
      <div className='App' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
        {posts.map((post, index) => (
          <div key={index} style={{ border: "1px solid black", width: 400, height: 200, textAlign: "center", display: "block" }}> {/* é importante haver uma key em cada div renderizada para o react achar mais fácil mapear */}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )

  }
}

export default App;
