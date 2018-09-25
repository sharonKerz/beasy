import React from 'react'
import classes from './NavigationItem.css'

const navigationItem = (prop) => (
        <li className={classes.NavigationItem}>
         <a href={prop.link} className={prop.active ? classes.active :  null}> {prop.children} </a> 
         </li>
);

export default navigationItem;