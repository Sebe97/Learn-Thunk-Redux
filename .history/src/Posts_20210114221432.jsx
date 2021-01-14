import React from 'react'

export default function Posts() {
    try {

        dispatch({ type: "START" })
        getData
        dispatch({ type: "SUCCESS", payload: Response.data })
    } catch (err) {
        dispatch({ type: "FAILURE", payload: err })
    }


    return (
        <div>
            Merge
        </div>
    )
}
