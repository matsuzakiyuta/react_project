import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Animation_management</h1>
                </header>
                <body className="App-body">
                    <form>
                        <ul>
                            <li class="name">
                                <label>アニメタイトル：</label>
                                <input type='text' name='name' />
                            </li>
                            <li class="story">
                                <label>話数　　　　　：</label>
                                <input type='number' name='story' />
                            </li>
                            <li class="title">
                                <label>タイトル　　　：</label>
                                <input type='text' name='title' />
                            </li>
                        </ul>
                        
                        <input type='submit' className='btn btn-info' value='登録' />
                    </form>
                </body>
            </div>
        );
    }
}

export default Form;