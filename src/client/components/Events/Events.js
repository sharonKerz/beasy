import React from 'react'
import EventCard from './EventCard'
const events = (prop) => (
    prop.events.map((event, index) => {
        return <EventCard key={event.id} event={event} openModal={prop.openModal} selectedEvent={prop.selectedEvent}></EventCard>
    })
);

export default events;