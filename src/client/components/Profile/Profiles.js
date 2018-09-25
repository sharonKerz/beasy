import React from 'react'
import ProfileCard from './ProfileCard'
const profiles = (prop) => (
    prop.profiles.map((profile, index) => {
        return <ProfileCard profile={profile}></ProfileCard>
    })
);

export default profiles;