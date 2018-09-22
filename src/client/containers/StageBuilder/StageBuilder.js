import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper'
import './StageBuilder.css';
import Profiles from '../../components/Profile/Profiles'
import CenterHorizontalGrid from '../../ui/Grid/CenterHorizontalGrid'

class StageBuilder extends Component {
    state = {
        profiles: [
            {
                companyName: "IBM",
                title: "looking for start ups",
                date: "September 14, 2018",
                body: "We looking for start ups to use our amazing Watson API"
            },
            {
                companyName: "Microsoft",
                title: "looking for event place",
                date: "September 17, 2018",
                body: "We looking for a large place to host our next event"
            },
            {
                companyName: "Coca Cola",
                title: "looking for events to promote new product",
                date: "September 21, 2018",
                body: "We looking for large events to promote our new product Coca Cola Null"
            }
        ]
    }
    render() {
        return (
            <Wrapper>
                <div>Search</div>
                <div>Profiles</div>
                <div>
                    <CenterHorizontalGrid>
                        <Profiles profiles={this.state.profiles} />
                    </CenterHorizontalGrid>
                </div>
            </Wrapper>
        );
    }
}

export default StageBuilder;
