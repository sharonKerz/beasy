import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout = (prop) => (
    <Wrapper>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
            {prop.children}
        </main>
    </Wrapper>
);

export default layout;