import React, { Component } from 'react';
import axios from '../../axios/axios-beasy'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { withRouter } from 'react-router-dom';
import MatchMakerForm from '../../components/MatchMaker/MatchMakerForm/MatchMakerForm'

import Wrapper from '../../hoc/Wrapper/Wrapper'

class MatchMakerBuilder extends Component {
    state = {
        openEventModal: false,
        events: [],
        selectedEvent: {}
    }

    render() {
        return (
            <Wrapper>
                <h2>The MatchMaker</h2>
                <h4>Tell us about your goal and we will match the best partent for you</h4> 
                <MatchMakerForm/>
            </Wrapper>
        );
    }
}

export default withRouter(withErrorHandler(MatchMakerBuilder, axios));
