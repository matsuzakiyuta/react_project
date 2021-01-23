import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Animation_management</h1>
      </header>
      <body className="App-body">
        <Button className="btn btn-demo">アニメ一覧</Button>
        <Button className="btn btn-warning">アニメ追加</Button>
        <Button className="btn btn-danger">アニメ削除</Button>
      </body>
    </div>
  );
}

export default App;
