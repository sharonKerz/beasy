import React from 'react'
import ProfileCard from './ProfileCard'
const profiles = (prop) => (
    prop.profiles.map((profile, index) => {
        return <ProfileCard key={profile.id} profile={profile} openModal={prop.openModal} selectedProfile={prop.selectedProfile}></ProfileCard>
    })
);

export default profiles;