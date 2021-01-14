import React from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
export default function Posts() {
    const fetchData = (dispatch) => {
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
    }
    const dispatch = useDispatch()

    return (
        <div>
            Merge
        </div>
    )
}
