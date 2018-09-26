import React, { Component } from 'react';
import axios from 'axios'

import Wrapper from '../../hoc/Wrapper'
import './StageBuilder.css';
import Profiles from '../../components/Profile/Profiles'
import CenterHorizontalGrid from '../../ui/Grid/CenterHorizontalGrid'
import Modal from '../../ui/Modal/Modal'
import ProfileSummery from '../../components/Profile/ProfileSummery'

class StageBuilder extends Component {
    state = {
        openModal: false,
        profiles: [],
        selectedProfile: {}
    }

    componentDidMount() {
        
        axios.get('/profiles').then(response => {
            this.setState({ profiles: response.data })
            console.log(response);
        });
    }

    openModalHandle = (profile) => {
        this.setState({ selectedProfile: profile });
        this.setState({ openModal: true });
    };

    closeModalHandle = () => {
        this.setState({ openModal: false });
    };

    render() {
        return (
            <Wrapper>
                <Modal isOpen={this.state.openModal} closeModal={this.closeModalHandle}>
                    <ProfileSummery profile={this.state.selectedProfile} />
                </Modal>
                <div>Profiles</div>
                <div>
                    <CenterHorizontalGrid>
                        <Profiles profiles={this.state.profiles}
                            openModal={this.openModalHandle} />
                    </CenterHorizontalGrid>
                </div>
            </Wrapper>
        );
    }
}

export default StageBuilder;
