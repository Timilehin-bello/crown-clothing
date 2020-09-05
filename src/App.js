import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';


 const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
