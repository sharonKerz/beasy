import React, { Component } from 'react';
import axios from '../../axios/axios-beasy'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { withRouter } from 'react-router-dom';

import Wrapper from '../../hoc/Wrapper/Wrapper'

class Intro extends Component {

    render() {
        return (
            <Wrapper>
                <h1> Intro</h1>
                <h2> Your code should be HERE</h2>
            </Wrapper>
        );
    }
}

export default Intro;
