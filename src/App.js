import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './List';
import Form from './Form';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={List} />　
          <Route exact path="/anime/add" component={Form} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
