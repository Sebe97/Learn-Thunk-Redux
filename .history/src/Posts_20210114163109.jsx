import { fetchPosts } from "./actions"

import React, { useEffect } from 'react'
import { unstable_renderSubtreeIntoContainer } from "react-dom"
import { useDispatch } from 'react-redux'
export default function Posts() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    dispatch(fetchPosts())
    // fetchPosts()
}, [])
return (
    <div>

    </div>
)
}
