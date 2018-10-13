import React, { Component } from 'react';
import axios from '../../axios/axios-beasy'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { withRouter } from 'react-router-dom';

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
                <h2>MatchMaker</h2>
            </Wrapper>
        );
    }
}

export default withRouter(withErrorHandler(MatchMakerBuilder, axios));
