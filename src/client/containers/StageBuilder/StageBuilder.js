import React, { Component } from 'react';
import axios from 'axios'

import Wrapper from '../../hoc/Wrapper/Wrapper'
import './StageBuilder.css';
import Events from '../../components/Events/Events'
import CenterHorizontalGrid from '../../ui/Grid/CenterHorizontalGrid'
import Modal from '../../ui/Modal/Modal'
import EventSummery from '../../components/Events/EventSummery'
import AddEventButton from '../../components/Buttons/AddEventButton/AddEventButton'

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

    render() {
        return (
            <Wrapper>
                <Modal isOpen={this.state.openModal} closeModal={this.closeModalHandle}>
                    <EventSummery event={this.state.selectedEvent} />
                </Modal>
                <div>
                    <h2>Events</h2>
                    <AddEventButton></AddEventButton>
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
