import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper'
import './StageBuilder.css';
import Profile from '../../components/Profile/Profile'
class StageBuilder extends Component {
    render() {
        return (
            <Wrapper>
                <div>Search</div>
                <div>Profiles</div>
                <Profile></Profile>
            </Wrapper>
        );
    }
}

export default StageBuilder;
