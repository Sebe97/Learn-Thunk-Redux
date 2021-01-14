
import { useDispatch } from 'react-redux'
export default function Posts() {
    const dispatch = useDispatch()
    return async () => {

        try {
            dispatch({ type: "START" })
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

            dispatch({
                type: "SUCCESS", payload: Response.data
            })
        } catch (err) {
            dispatch({ type: "FAILURE", payload: err })
        }


    }

