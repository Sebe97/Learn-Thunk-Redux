import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore, combineReducers, applyMiddleware } from "redux"
import dataReducer from './reducer'

const ourStore = createStore(dataReducer, applyMiddleware)

ReactDOM.render(

    <App />
    , document.getElementById('root'))