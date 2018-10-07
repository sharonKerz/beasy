import React, { Component } from 'react';
import axios from '../../axios/axios-beasy'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import Modal from '../../ui/Modal/Modal'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class CompanyProfileBuilder extends Component {
    state = {
        profile: null
    }

    componentDidMount() {
        console.log("hey")
        const profileId = new URLSearchParams(this.props.location.search).get('id')
        console.log(profileId)
        this.setState({ profile: profileId })

        // axios.get('/profiles', {
        //     params: {
        //         id: profileId
        //     }
        // }).then(response => {
        //     this.setState({ profile: response.data })
        //     console.log(response);
        // });
    }

    render() {
        return (
            <Wrapper>
                <h1> id is </h1>
                <h1> Company Name</h1>
                <h2> About Us</h2>
            </Wrapper>
        );
    }
}

export default withErrorHandler(CompanyProfileBuilder, axios);
