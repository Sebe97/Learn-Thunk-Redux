import React from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
export default function Posts() {
    const dispatch = useDispatch()
    return async () => {

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch({ type: "START" })

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
