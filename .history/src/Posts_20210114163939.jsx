import { fetchPosts } from "./actions"

import React, { useEffect } from 'react'
import { unstable_renderSubtreeIntoContainer } from "react-dom"
import { useDispatch, useSelector } from 'react-redux'
export default function Posts() {

    const dispatch = useDispatch()
    const posts = [1, 2, 23, 3]
    useEffect(() => {
        dispatch(fetchPosts())
        // fetchPosts()
    }, [])
    return (
        <div>
            {posts.map((el, i) => {
                return <p>Working</p>
            })}
        </div>
    )
}
