import React, { Component } from 'react';

import SimpleSuccessTest from './SimpleSuccessText/SimpleSuccessText.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleSuccessTest />
        <SimpleSuccessTest />s
        <SimpleSuccessTest />
        <SimpleSuccessTest />
      </div>
    );
  }
}

export default App;