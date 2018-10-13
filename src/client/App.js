import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import EventsBuilder from './containers/EventsBuilder/EventsBuilder'
import CompanyProfileBuilder from './containers/CompanyProfileBuilder/CompanyProfileBuilder'
import MatchMakerBuilder from './containers/MatchMakerBuilder/MatchMakerBuilder'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={EventsBuilder} />
          <Route path="/Companies" component={CompanyProfileBuilder} />
          <Route path="/MatchMaker" component={MatchMakerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;