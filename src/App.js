import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import AnimalList from './components/AnimalList';
import AnimalInfo from './components/AnimalInfo';
import AnimalAdd from './components/AnimalAdd';
import AnimalEdit from './components/AnimalEdit';
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  // Define Navlinks state here and pass down as props
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(!loggedIn);
  }

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} handleLogin={handleLogin} />
        <Switch>
          <Route path="/" exact component={AnimalList} />
          <Route path="/about" component={About} />
          <Route path="/animal/:id" component={AnimalInfo} />
          <Route path="/edit/:id" exact component={AnimalEdit} />
          <Route path="/add" exact component={AnimalAdd} />
          <Route path="/user/register" exact component={Register} />
          <Route path="/user/login" exact render={() => <Login handleLogin={handleLogin} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
