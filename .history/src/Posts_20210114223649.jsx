import React, { useEffect } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
export default function Posts() {
    const dispatch = useDispatch()

    const fetchData = () => {
        console.log("merge");
        return async () => {

            try {
                dispatch({ type: "START" })
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(response.data);
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

    const databaseData = useReducer(state => state)
    return (
        <div>
            {databaseData.items.map((el, i) => {
                <p>Item</p>
            })}
        </div>
    )
}
