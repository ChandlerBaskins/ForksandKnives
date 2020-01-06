import React, {Fragment} from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function App() {
  return (
    <Fragment className="App tc">
      <Navbar/>
      <Header/>
      <Cardlist/>
    </Fragment>
  );
}

export default App;
