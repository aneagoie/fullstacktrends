import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="p-5 m-5 text-center">
            <h1>Temporary Content Section</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ultrices augue, eget porta augue molestie sit amet. Aliquam sit amet augue volutpat lorem ultricies auctor posuere sed lectus. Mauris feugiat rutrum congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget odio orci. Suspendisse consequat arcu id ante facilisis, a ultrices arcu condimentum. Vivamus pellentesque urna varius, condimentum nunc a, fermentum ex. Sed sodales efficitur feugiat. Phasellus porta commodo mauris ut mollis. Donec bibendum condimentum nunc a iaculis.
            In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse et faucibus eros. Nam pretium molestie accumsan. Ut a ipsum urna. Quisque sodales egestas tincidunt. Vestibulum finibus a purus ac tempus.
            Donec ornare fringilla mattis. Nulla gravida consequat odio, sit amet pharetra ipsum semper quis. Vestibulum ut libero dapibus dolor auctor ullamcorper. Duis suscipit est in enim ornare consequat. Phasellus tempor, diam non blandit sagittis, erat ex iaculis nulla, non ultrices metus neque nec augue. Quisque metus dui, ultricies et laoreet eget, convallis ultricies enim. Fusce massa elit, convallis vel euismod quis, eleifend in lectus.
            Pellentesque ac faucibus lorem. Maecenas ornare odio quis eros aliquet, mattis accumsan elit dictum. Integer vitae urna dapibus, scelerisque purus eu, placerat nunc. Fusce feugiat lobortis leo, quis pretium lectus hendrerit sed. Donec ornare odio non tellus viverra, a mattis augue finibus. Nunc id ipsum metus. Donec elementum velit quis euismod euismod. Curabitur in urna ultricies orci iaculis cursus. Sed facilisis ultricies sollicitudin. Suspendisse elementum turpis sit amet egestas sagittis. Aenean aliquet commodo ornare. Duis iaculis, nisi quis maximus sollicitudin, magna felis facilisis mi, nec efficitur libero lectus at nisi. Quisque mollis augue lacus, dapibus rhoncus ipsum blandit nec. Vivamus sed augue vel massa venenatis luctus.</p>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
