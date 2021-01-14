import axios from 'axios'
export const fetchPosts = () => {
    return async (dispatch) => {

        try {

            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch({
                type: "SUCCESS",
                payload: response.data
            })
        } catch (err) {

        }

    }
}