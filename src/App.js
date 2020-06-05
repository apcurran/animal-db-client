import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimalList from './components/AnimalList';
import AnimalInfo from './components/AnimalInfo';
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={AnimalList} />
          <Route path="/animal/:id" component={AnimalInfo} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
