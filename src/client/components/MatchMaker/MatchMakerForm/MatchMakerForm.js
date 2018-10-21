import React, { Component } from 'react';
import axios from '../../../axios/axios-beasy';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import SelectInput from '../../InputFields/SelectInput';
import Checkbox from '../../InputFields/Checkbox';
import Slider from '../../InputFields/Slider';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import MatchMakerFormData from '../MatchMakerForm/MatchMakerFormData/MatchMakerFormData';
import BlueButton from '../../Buttons/BlueButton/BlueButton';

class MatchMakerForm extends Component {
    state = {
        mainGoals: '',
        how: '',
        achieve: ['BrandAwareness'],
        where: '',
        budget: '',
    }

    singleAnswerChangeHandler = id => event => {
        const updatedState = { ...this.state }
        updatedState[id] = event.target.value
        this.setState({ [id]: updatedState[id] })
    }

    multiAnswerChangeHandler = id => event => {
        const updatedState = { ...this.state }
        if (event.target.checked) {
            updatedState[id].push(event.target.value)
        } else {
            updatedState[id].splice(updatedState[id].indexOf(event.target.value), 1)
        }
        this.setState({ [id]: updatedState[id] })
    }

    sendFormToServer = () => {
        const goal = {...this.state}
        axios.post('/goals', goal)
            .then(response => console.log(response))
    }    
    render() {
        return (
            <Wrapper>
                <form>
                    <SelectInput changed={this.singleAnswerChangeHandler('mainGoals')} inputData={MatchMakerFormData.mainGoals()} />
                    <SelectInput changed={this.singleAnswerChangeHandler('how')} inputData={MatchMakerFormData.how()} />
                    <Checkbox changed={this.multiAnswerChangeHandler('achieve')} inputData={MatchMakerFormData.achieve()} />
                    <SelectInput changed={this.singleAnswerChangeHandler('where')} inputData={MatchMakerFormData.where()} />
                    <Slider changed={this.singleAnswerChangeHandler('budget')} />
                    <BlueButton clicked={this.sendFormToServer} text="Get Beasy"></BlueButton>

                </form>
            </Wrapper>
        );
    }
}

export default withErrorHandler(MatchMakerForm, axios);
