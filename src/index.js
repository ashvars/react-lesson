import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header';
import Add from './Add';
import View from './View';
import Home from './Home';

import store from './store';
import { addName, deleteName } from './actions';

import './index.css';

function mapStateToProps(state) {
  return { names: state };
}

function mapDispatchToProps() {
  return { addName: (name) => store.dispatch(addName(name)), deleteName: (name) => store.dispatch(deleteName(name)) }
}

const AddMapped = connect(mapDispatchToProps)(Add);

const ViewMapped = connect(mapStateToProps, mapDispatchToProps)(View);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Header />
          <Switch>
            <Route path="/add">
              <AddMapped />
            </Route>
            <Route path="/view">
              <ViewMapped />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

ReactDOM.render(<App />,document.getElementById("root"));