import React, { Component } from 'react';
import axios from '../../axios/axios-beasy'

import Wrapper from '../../hoc/Wrapper/Wrapper'
import './StageBuilder.css';
import Events from '../../components/Events/Events'
import CenterHorizontalGrid from '../../ui/Grid/CenterHorizontalGrid'
import Modal from '../../ui/Modal/Modal'
import EventSummery from '../../components/Events/EventSummery'
import AddButton from '../../components/Buttons/AddButton/AddButton'

class StageBuilder extends Component {
    state = {
        openModal: false,
        events: [],
        selectedEvent: {}
    }

    componentDidMount() {
        axios.get('/events').then(response => {
            this.setState({ events: response.data })
            console.log(response);
        });
    }

    openModalHandle = (event) => {
        this.setState({ selectedEvent: event });
        this.setState({ openModal: true });
    };

    closeModalHandle = () => {
        this.setState({ openModal: false });
    };

    addEventHandler = () => {
        const event = {
            companyName: "Generated Company",
            title: "Generated Title",
            date: "Generated Date",
            body: "GeneratedBody",
            id: 100
        }
        axios.post('/events', event)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

    render() {
        return (
            <Wrapper>
                <Modal isOpen={this.state.openModal} closeModal={this.closeModalHandle}>
                    <EventSummery event={this.state.selectedEvent} />
                </Modal>
                <div>
                    <h2>Events</h2>
                    <AddButton onClick={this.addEventHandler}></AddButton>
                </div>
                <div>
                    <CenterHorizontalGrid>
                        <Events events={this.state.events}
                            openModal={this.openModalHandle} />
                    </CenterHorizontalGrid>
                </div>
            </Wrapper>
        );
    }
}

export default StageBuilder;
