import React, { Component } from 'react';
import axios from '../../axios/axios-beasy'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import Modal from '../../ui/Modal/Modal'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class CompanyProfileBuilder extends Component {

    render() {
        return (
            <Wrapper>
                <h1> Company Name</h1>
                <h2> About Us</h2>
            </Wrapper>
        );
    }
}

export default withErrorHandler(CompanyProfileBuilder, axios);
