import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import StageBuilder from './containers/StageBuilder/StageBuilder'
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