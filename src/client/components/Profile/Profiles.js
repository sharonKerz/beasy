import React from 'react'
import Profile from './Profile'
const profiles = (prop) => (
    prop.profiles.map((profile, index) => {
        return <Profile profile={profile}></Profile>
    })
);

export default profiles;