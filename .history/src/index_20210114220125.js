import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore, combineReducers } from "redux"
import dataReducer from './reducer'

const ourStore = createStore(combineReducers(dataReducer))

ReactDOM.render(

    <App />
    , document.getElementById('root'))