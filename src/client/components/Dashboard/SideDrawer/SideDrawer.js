import React, { Component } from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";

class SideDrawer extends Component {
  render() {
    const { classes, isOpen, closeDrawer } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !isOpen && classes.drawerPaperClose
          )
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={closeDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
    );
  }
}

export default SideDrawer;
