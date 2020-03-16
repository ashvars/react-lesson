import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './index.css';

function Header() {
  return (
    <div className="blueBG inline pad10">
      <h1 style={{margin: "0 30px 0 0"}}>User Entry Application</h1>
      <nav className="inline">
        <ul className="inline" id="navLinks">
          <li><Link className="selected" to="/">Home</Link></li>
          <li><Link to="/add">Add</Link></li>
          <li><Link to="/view">View</Link></li>
          <li><Link to="/delete">Delete</Link></li>
        </ul>
      </nav>
    </div>
  )
}

function Add() {
  return (
    <div className="pad10">
      Add
    </div>
  )
}

function View() {
  return (
    <div className="pad10">
      View
    </div>
  )
}

function Delete() {
  return (
    <div className="pad10">
      Delete
    </div>
  )
}

function Home() {
  return (
    <div className="pad10">
      This is a sample application to test out some React features like Router, Hooks and Redux.
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />,document.getElementById("root"));

/*const names = [];

function addName(payload) {
  return { type: "ADD_NAME", payload };
}

function reducer(state = names, action) {
  switch(action.type) {
    case "ADD_NAME": return state.concat(action.payload);
  }
  return state;
}

const store = createStore(reducer);

window.store = store;

function App() {
  function addNames() {
    store.dispatch(addName("Archie Andrews"));
  }
  return (
    <Provider store={store}>
    <div>
      <button onClick={() => addNames()}>Trigger Redux</button>
      <ShowListMapped />
      <AddNamesToListMapped />
    </div>
    </Provider>
  )
}

function mapStateToProps(state) {
  console.log(state);
  return { names: state };
}
function ShowList({ names }) {
  return (
    <ul>
      {names.map((name,index) => <li key={index}>{name}</li>)}
    </ul>
  )
}

function mapDispatchToProps() {
  return { addName: (name) => store.dispatch(addName(name))}
}
function AddNamesToList({ addName }) {
  const [name, setName] = useState('');
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => {addName(name)}}>Add Name</button>
    </div>
  )
}
const AddNamesToListMapped = connect(mapDispatchToProps)(AddNamesToList);

const ShowListMapped = connect(mapStateToProps)(ShowList);

ReactDOM.render(<App />, document.getElementById("root"));
*/