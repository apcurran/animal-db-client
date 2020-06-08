import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import AnimalList from './components/AnimalList';
import AnimalInfo from './components/AnimalInfo';
import AnimalAdd from './components/AnimalAdd';
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={AnimalList} />
          <Route path="/about" component={About} />
          <Route path="/animal/:id" component={AnimalInfo} />
          <Route path="/add" exact component={AnimalAdd} />
          <Route path="/user/register" exact component={Register} />
          <Route path="/user/login" exact component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
