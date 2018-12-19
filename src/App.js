import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
