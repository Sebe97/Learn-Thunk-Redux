import React, { useEffect } from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
export default function Posts() {
    const dispatch = useDispatch()

    const fetchData = () => {
        console.log("merge");
        return async () => {
            dispatch({ type: "START" })

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

    useEffect(() => {
        dispatch(fetchData())
    }, [])
    return (
        <div>
            Merge
        </div>
    )
}
