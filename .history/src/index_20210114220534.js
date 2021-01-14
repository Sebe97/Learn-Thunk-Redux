import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore, combineReducers, applyMiddleware, Provider } from "redux"
import { Provider } from 'react-redux'
import dataReducer from './reducer'

const ourStore = createStore(dataReducer, applyMiddleware)

ReactDOM.render(
    <Provider store={ourStore}>

        <App />
    </Provider>
    , document.getElementById('root'))