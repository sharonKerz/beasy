import React, { Component } from 'react';
import axios from '../../axios/axios-beasy'

import Wrapper from '../../hoc/Wrapper/Wrapper'
import './StageBuilder.css';
import Events from '../../components/Events/Events'
import CenterHorizontalGrid from '../../ui/Grid/CenterHorizontalGrid'
import Modal from '../../ui/Modal/Modal'
import EventSummery from '../../components/Events/EventSummery'
import AddButton from '../../components/Buttons/AddButton/AddButton'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class StageBuilder extends Component {
    state = {
        openEventModal: false,
        events: [],
        selectedEvent: {}
    }

    componentDidMount() {
        axios.get('/events').then(response => {
            this.setState({ events: response.data })
            console.log(response);
        });
    }

    openEventModalHandle = (event) => {
        this.setState({ selectedEvent: event });
        this.setState({ openEventModal: true });
    };

    closeEventModalHandle = () => {
        this.setState({ openEventModal: false });
    };

    addEventHandler = () => {
        const event = {
            companyName: "Generated Company",
            title: "Generated Title",
            date: "Generated Date",
            body: "GeneratedBody",
            id: 100
        }
        axios.post('/eventssss', event)
            .then(response => console.log(response))
            .catch(error => this.openErrorModalHandle(error.message))
    };

    render() {
        return (
            <Wrapper>
                <Modal isOpen={this.state.openEventModal} closeModal={this.closeEventModalHandle}>
                    <EventSummery event={this.state.selectedEvent} />
                </Modal>
                <div>
                    <h2>Events</h2>
                    <AddButton onClick={this.addEventHandler}></AddButton>
                </div>
                <div>
                    <CenterHorizontalGrid>
                        <Events events={this.state.events}
                            openEventModal={this.openEventModalHandle} />
                    </CenterHorizontalGrid>
                </div>
            </Wrapper>
        );
    }
}

export default withErrorHandler(StageBuilder, axios);
