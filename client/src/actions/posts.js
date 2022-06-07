import * as api from "../api";

//Action Creators
export const getPosts = () => async (dispach) => {
  try {
    const { data } = await api.fetchPosts();
    dispach({ type: "FETCH_ALL", payload: data });
  } catch (e) {
    console.log(e.message);
    console.log('luluu')
  }
};
