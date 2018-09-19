import React, { Component } from 'react';

import SimpleSuccessTest from './simpleSuccessTest.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleSuccessTest />
        <SimpleSuccessTest />
        <SimpleSuccessTest />
        <SimpleSuccessTest />
      </div>
    );
  }
}

export default App;