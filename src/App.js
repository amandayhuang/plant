import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home'
import Joke from './Components/Joke'
import AppBar from './Components/AppBar'

const App = () => {
  return (
    <div className="App">
      {/* <ProtectedRoute path='/stocks' component={NavBarContainerAuth} />
      <ProtectedRoute exact path='/portfolio' component={NavBarContainerAuth} />
      <ProtectedRoute exact path='/portfolio' component={PortfolioContainer} />
      <ProtectedRoute path='/stocks/:stockId' component={StockShowContainer} /> */}

      {/* <Switch> */}
      <Route path="/" component={AppBar} />
      {/* <Route path="/" exact component={Home} /> */}

      {/* </Switch> */}
{/* 
      <Route path="/joke" exact component={Joke} />
      <Route path="/question" exact component={Home} />
      <Route path="/teach" exact component={Home} />
      <Route path="/show" exact component={Home} /> */}
    </div>
  );
};

export default App;