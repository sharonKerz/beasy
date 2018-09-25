import React from 'react'
import ProfileCard from './ProfileCard'
const profiles = (prop) => (
    prop.profiles.map((profile, index) => {
        return <ProfileCard profile={profile} openModal={prop.openModal}></ProfileCard>
    })
);

export default profiles;