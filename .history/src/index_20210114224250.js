import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const ourStore = createStore(
    combineReducers(reducer),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),

)



ReactDOM.render(
    <Provider store={ourStore}>

        <App />
    </Provider>
    , document.getElementById('root'))