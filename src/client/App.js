import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import EventsBuilder from './containers/EventsBuilder/EventsBuilder'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <EventsBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;