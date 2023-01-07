import Leaflet from 'leaflet';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import 'leaflet/dist/leaflet.css';
import SimpleExample from './components/map';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SimpleExample />
      </div>
    );
  }
}

export default App;
