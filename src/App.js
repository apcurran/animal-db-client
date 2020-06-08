import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimalList from './components/AnimalList';
import AnimalInfo from './components/AnimalInfo';
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
          <Route path="/animal/:id" component={AnimalInfo} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
