import axios from 'axios'
export const fetchPosts = () => {

    return async (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })
    }



    // return {
    //     type: "FETCH_POSTS",
    //     payload: response.data
    // }
}