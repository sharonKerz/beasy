import React from 'react'
import classes from './NavigationItem.css'
import { NavLink } from 'react-router-dom'

const navigationItem = (prop) => (
        <li className={classes.NavigationItem}>
        <NavLink to={prop.link}  className={prop.active ? classes.active :  null} >  {prop.children} </NavLink>
         </li>
);

export default navigationItem;