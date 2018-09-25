import React from 'react'
import Wrapper from '../../hoc/Wrapper'
const profileSummery = (prop) => (
  <Wrapper>
    <h1> {prop.profile.companyName} </h1>
    <h2> {prop.profile.body} </h2>
  </Wrapper>
);

export default profileSummery;