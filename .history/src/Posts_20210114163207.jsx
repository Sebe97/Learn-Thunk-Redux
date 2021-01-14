import { fetchPosts } from "./actions"

import React, { useEffect } from 'react'
import { unstable_renderSubtreeIntoContainer } from "react-dom"
import { useDispatch,const state = useSelector(state => state.state)} from 'react-redux'
export default function Posts() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    useEffect(() => {
        dispatch(fetchPosts())
        // fetchPosts()
    }, [])
    return (
        <div>

        </div>
    )
}
