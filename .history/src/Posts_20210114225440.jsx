import React, { useEffect } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
export default function Posts() {

    const fetchData = (dispatch) => {
        console.log("merge");
        return async () => {

            try {
                dispatch({ type: "START" })
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(response.data);
                dispatch({
                    type: "SUCCESS", payload: [1, 2, 3]
                })
            } catch (err) {
                dispatch({ type: "FAILURE", payload: err })
            }


        }
    }

    const databaseData = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
        console.log("aici");
        console.log(databaseData)

    }, [])


    return (
        <div>
            Merge
            {/* {databaseData.items.map((el, i) => {
                return (
                    <p>el</p>
                )
            })} */}
        </div>
    )
}
