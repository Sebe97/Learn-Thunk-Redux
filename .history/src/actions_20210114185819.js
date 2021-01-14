import axios from 'axios'
export const fetchPosts = () => {
    return async (dispatch) => {

        try {
            dispatch({
                type: "START",
            })
            const response = await axios.get("https://jssonplaceholder.typicode.com/posts")
            dispatch({
                type: "SUCCESS",
                payload: response.data
            })
        } catch (err) {
            dispatch({
                type: "FAILURE",
                payload: err
            })
        }

    }
}