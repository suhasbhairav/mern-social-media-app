import axios from "axios";

export const getPosts = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/posts/");
  try {
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async(dispatch) => {
    const {data} = await axios.post("http://localhost:5000/posts/",post);
    try{
        dispatch({
            type: "CREATE_POST",
            payload: data
        });
    }catch(error){
        console.log(error.message);
    }
};

export const deletePost = (id) => async(dispatch) => {
    const {data} = await axios.delete(`http://localhost:5000/posts/${id}`);
    try{
        dispatch({
            type: "DELETE",
            payload: data
        });
    }catch(error){
        console.log(error.message);
    }
};

export const updatePost = (id, post) => async(dispatch) => {
    const {data} = await axios.patch(`http://localhost:5000/posts/${id}`, post);
    try{
        dispatch({
            type: "UPDATE",
            payload: data
        });
    }catch(error){
        console.log(error.message);
    }
};

export const likePost = (id) => async(dispatch) => {
    const {data} = await axios.patch(`http://localhost/posts/${id}/likePost`);
    try{
        dispatch({
            type: "LIKE",
            payload: data
        });
    }catch(error){
        console.log(error.message);
    }
};