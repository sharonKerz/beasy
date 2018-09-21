import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import classes from './Layout.css';
const layout = (prop) => (
    <Wrapper>
        <div>Tool bar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {prop.children}
        </main>
    </Wrapper>
);

export default layout;