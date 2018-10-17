import React, { Component } from 'react';
import axios from '../../../axios/axios-beasy'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import SelectInput from '../../InputFields/SelectInput'
import Checkbox from '../../InputFields/Checkbox'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import MatchMakerFormData from '../MatchMakerForm/MatchMakerFormData/MatchMakerFormData';

class MatchMakerForm extends Component {
    state = {
        mainGoals: '',
        how: '',
        achieve: ['BrandAwareness'],
        where: '',
        budget: '',
    }
    singleAnswerChangeHandler = id => event => {
        console.log("1")
        console.log(id)
        console.log(event.target.value)
        console.log(this.state)
        const updatedState = { ...this.state }
        updatedState[id] = event.target.value
        this.setState({ [id]: updatedState[id] })
        console.log("2")
        console.log(updatedState[id])
        console.log(this.state)
    }

    multiAnswerChangeHandler = id => event => {
        console.log("1")
        console.log(id)
        console.log(event.target.value)
        console.log(event.target.checked)
        console.log(this.state)
        const updatedState = { ...this.state }
        if (event.target.checked) {
            updatedState[id].push(event.target.value)
        } else {
            updatedState[id].splice(updatedState[id].indexOf(event.target.value), 1)
        }
        this.setState({ [id]: updatedState[id] })
        console.log("2")
        console.log(updatedState[id])
        console.log(this.state)
    }

    render() {
        return (
            <Wrapper>
                <form>
                    <SelectInput changed={this.singleAnswerChangeHandler('mainGoals')} inputData={MatchMakerFormData.mainGoals()} />
                    <SelectInput changed={this.singleAnswerChangeHandler('how')} inputData={MatchMakerFormData.how()} />
                    <Checkbox changed={this.multiAnswerChangeHandler('achieve')} inputData={MatchMakerFormData.achieve()} />
                    <SelectInput changed={this.singleAnswerChangeHandler('where')} inputData={MatchMakerFormData.where()} />
                    <SelectInput changed={this.singleAnswerChangeHandler('budget')} inputData={MatchMakerFormData.budget()} />
                </form>
            </Wrapper>
        );
    }
}

export default withErrorHandler(MatchMakerForm, axios);
