import { fetchPosts } from "./actions"

import React, { useEffect } from 'react'
import { unstable_renderSubtreeIntoContainer } from "react-dom"
import { useDispatch, useSelector } from 'react-redux'
export default function Posts() {

    const dispatch = useDispatch()
    const allState = useSelector(state => state)
    console.log(allState);
    useEffect(() => {
        dispatch(fetchPosts())
        // fetchPosts()
        console.log("useEffect");
    }, [])
    return (
        <div>
            { allState && allState.items.map((el, i) => <p key={i}>{el.title}</p>)}
        </div>
    )
}
