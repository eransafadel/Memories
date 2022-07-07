import React, { useState,useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import Navbar from "./components/Navbar/Navbar";


export default function App() {

  const [currentId,setCurrentId] =useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch,currentId])
  return (
    <Container maxidth="lg">
     <Navbar/>
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
