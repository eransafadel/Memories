import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updatedPost = (id,post) => async (dispatch) => {
    try{
        const { data } =await api.updatePost(id,post);
        dispatch({ type:'UPDATE',payload:data});

    }
    catch(error){
      console.log("there is problem\n");
      console.log(error.message);
    }
  }


  
  export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        console.log("DELETE!");
        dispatch({ type:'DELETE ',payload:id});

    }
    catch(error){
      console.log("there is problem\n");
      console.log(error);
    }
  }


  export const likePost = (id) => async (dispatch) => {

 
    try{
      const { data } =await api.likePost(id);
      dispatch({ type:'UPDATE',payload:data});

  }
  catch(error){
    console.log("there is problem\n");
    console.log(error.message);
  }

  }