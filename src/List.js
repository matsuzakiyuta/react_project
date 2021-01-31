import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class List extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Animation_management</h1>
                </header>
                <body className="App-body">
                    <Button className="btn btn-demo">アニメ一覧</Button>
                    <Link to={'/anime/add'}>
                        <Button className="btn btn-warning">アニメ追加</Button>
                    </Link>
                    <Button className="btn btn-danger">アニメ編集</Button>
                </body>
            </div>
        );
    }
}

export default List;