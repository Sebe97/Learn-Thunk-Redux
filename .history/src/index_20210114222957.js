import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import dataReducer from './reducer'
import thunk from 'redux-thunk'

const ourStore = createStore(dataReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={ourStore}>

        <App />
    </Provider>
    , document.getElementById('root'))