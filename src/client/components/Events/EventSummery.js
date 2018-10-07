import React from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import BlueButton from '../Buttons/BlueButton/BlueButton'
import {withRouter} from 'react-router-dom';

class EventSummery extends React.Component {
  redirectToCompanies = () => {
    this.props.history.push('/Companies')
  }
  render() {
    const { event } = this.props

    return (
      <Wrapper>
        <h1> {event.companyName} </h1>
        <h2> {event.body} </h2>
        <BlueButton clicked={this.redirectToCompanies} text="more"></BlueButton>
      </Wrapper>
    )
  };
}
export default withRouter(EventSummery);