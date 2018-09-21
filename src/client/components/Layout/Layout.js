import React from 'react'
import Wrapper from '../../hoc/Wrapper'
const layout = (prop) => (
    <Wrapper>
        <div>Tool bar, SideDrawer, Backdrop</div>
        <main>
            {prop.children}
        </main>
    </Wrapper>
);

export default layout;