import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'; // no changes here 😀


import postsReducer from "./reducer"

const store = createStore(
    postsReducer
    // applyMidleware
)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'))