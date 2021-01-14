import axios from 'axios'
export const fetchPosts = async () => {

    return (dispatch, getState) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

    }



    return {
        type: "FETCH_POSTS",
        payload: response.data
    }
}