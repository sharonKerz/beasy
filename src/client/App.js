import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import SimpleSuccessTest from './components/SimpleSuccessText/SimpleSuccessText';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p> Test </p>
          <SimpleSuccessTest></SimpleSuccessTest>
        </Layout>
      </div>
    );
  }
}

export default App;