import React from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
const dispatch = useDispatch()
export default function Posts() {
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
    return (
        <div>
            Merge
        </div>
    )
}
