import React, { Component } from 'react';
import axios from '../../../axios/axios-beasy'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import SelectInput from '../../InputFields/SelectInput'
import Checkbox from '../../InputFields/Checkbox'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import MatchMakerFormData from '../MatchMakerForm/MatchMakerFormData/MatchMakerFormData';

class MatchMakerForm extends Component {
    render() {
        return (
            <Wrapper>
                <SelectInput inputData={MatchMakerFormData.mainGoals()} />
                <SelectInput inputData={MatchMakerFormData.how()} />
                <Checkbox inputData={MatchMakerFormData.achieve()} />
                <SelectInput inputData={MatchMakerFormData.where()} />
                <SelectInput inputData={MatchMakerFormData.budget()} />
            </Wrapper>
        );
    }
}

export default withErrorHandler(MatchMakerForm, axios);
