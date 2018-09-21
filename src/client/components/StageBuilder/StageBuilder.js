import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper'
import './StageBuilder.css';
class StageBuilder extends Component {
    render() {
        return (
            <Wrapper>
                <div>Search</div>
                <div>Profiles</div>
            </Wrapper>
        );
    }
}

export default StageBuilder;
