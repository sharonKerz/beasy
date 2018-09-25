import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (prop) => (
<ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Home</NavigationItem>
    <NavigationItem link="/">The Mission</NavigationItem>
    <NavigationItem link="/">MatchMaker</NavigationItem>
    <NavigationItem link="/">Opportunities</NavigationItem>
    <NavigationItem link="/">Contact Us</NavigationItem>

</ul>

);

export default navigationItems;