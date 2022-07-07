
import React from 'react';
import {  AppBar, Typography} from "@mui/material";
import useStyles from './styles';
import memories from "../../images/memories.png";
const Navbar = () => {

    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h3" >Memories</Typography>
    <img className={classes.image} src={memories}  alt="memories" height="60"></img>
  </AppBar>
  )
}

export default Navbar