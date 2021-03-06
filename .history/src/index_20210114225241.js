import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const ourStore = createStore(
    combineReducers(reducer),
    composeWithDevTools(
        applyMiddleware(...middleware),
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )



ReactDOM.render(
        <Provider store={ourStore}>

            <App />
        </Provider>
        , document.getElementById('root'))