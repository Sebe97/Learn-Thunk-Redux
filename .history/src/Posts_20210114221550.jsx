import React from 'react'
import axios from 'axios'

export default function Posts() {
    return async () => {

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch({ type: "START" })
            getData
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
