import React from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'
const eventSummery = (prop) => (
  <Wrapper>
    <h1> {prop.event.companyName} </h1>
    <h2> {prop.event.body} </h2>
  </Wrapper>
);

export default eventSummery;