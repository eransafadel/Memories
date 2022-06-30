import React, { useState,useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import memories from "../src/images/memories.png";

export default function App() {

  const [currentId,setCurrentId] =useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch,currentId])
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          My Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="strecth"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
             
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
