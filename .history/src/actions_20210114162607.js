import axios from 'axios'
import useDispatch from 'react-redux'
const dispatch = useDispatch()
export const fetchPosts = () => {
    return async () => {


        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data);
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })

    }
}