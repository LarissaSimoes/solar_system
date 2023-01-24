import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Tittle from './components/Tittle';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Tittle />
      </div>
    );
  }
}

export default App;
