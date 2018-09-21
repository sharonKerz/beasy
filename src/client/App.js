import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import StageBuilder from './components/StageBuilder/StageBuilder'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <StageBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;