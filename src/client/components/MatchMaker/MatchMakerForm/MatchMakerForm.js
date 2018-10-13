import React, { Component } from 'react';
import axios from '../../../axios/axios-beasy'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import SelectInput from '../../InputFields/SelectInput'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import MatchMakerFormData from '../MatchMakerForm/MatchMakerFormData/MatchMakerFormData';

class MatchMakerForm extends Component {
    render() {
        return (
            <Wrapper>
                {console.log(MatchMakerFormData.mainGoals())}
                <SelectInput inputData={MatchMakerFormData.mainGoals()}> </SelectInput>
                <SelectInput inputData={MatchMakerFormData.how()}> </SelectInput>
                <SelectInput inputData={MatchMakerFormData.where()}> </SelectInput>
            </Wrapper>
        );
    }
}

export default withErrorHandler(MatchMakerForm, axios);
