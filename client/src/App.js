
//hey SSSS 1212
import React ,{useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

import memories from "../src/images/memories.png";

export default function App() {
  const classes = useStyles();
  const dispach = useDispatch();

  useEffect(()=>{
    dispach(getPosts());
  },[dispach])
  return (
    <Container maxidth="lg"  >
      
      <AppBar className={classes.appBar}  position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="strecth"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

