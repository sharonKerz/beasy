import React from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'
const errorSummery = (prop) => (
    <Wrapper>
        <h1> Something went wrong</h1>
        <h2> {prop.errorMessage}</h2>
        <h3> Please try again...</h3>
    </Wrapper>
);

export default errorSummery;