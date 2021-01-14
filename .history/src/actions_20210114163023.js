import axios from 'axios'
export const fetchPosts = () => {
    return async (dispatch) => {


        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data);
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })

    }
}