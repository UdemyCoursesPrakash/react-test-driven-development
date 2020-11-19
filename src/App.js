import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Calculator from './Containers/Calculator/calculator';
import Counter from './Containers/Counter/Counter';
import Header from './Containers/Header/Header';
import Mock from './Containers/Mock';
import WordGame from './Containers/WordGame/wordGame';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="mainContent">
            <Switch>
              <Route path="/counter" component={Counter} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/mock" component ={Mock} />
              <Route path="/word-game" component={WordGame} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
