import React, { Component } from 'react'

import Wrapper from '../Wrapper/Wrapper'
import Modal from '../../ui/Modal/Modal'
import ErrorSummery from '../../components/Errors/ErrorSummery'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        closeErrorModalHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Wrapper>
                    <Modal isOpen={this.state.error} closeModal={this.closeErrorModalHandler}>
                        <ErrorSummery error={this.state.error} />
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Wrapper>
            );
        }
    }
}

export default withErrorHandler;