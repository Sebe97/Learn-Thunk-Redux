import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore } from "react-redux"
import dataReducer from './reducer'

const ourStore = createStore(dataReducer, middleware)

ReactDOM.render(

    <App />
    , document.getElementById('root'))