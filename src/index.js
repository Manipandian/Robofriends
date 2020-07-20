import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "tachyons";
import { Provider } from 'react-redux'; // provider - To pass store all to all chile component as a porps wirhout mention.(cool)
import {createStore, applyMiddleware, combineReducers } from 'redux'; // Middleare act as mediator between action and reducer(It is usefull if i have more number of actions.)
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import App from "./Container/App"
import * as serviceWorker from './serviceWorker';
import {searchRobot, requestRobots} from './reducers';

// It act as middleware (middleware => it acts like a mediator between action and reducer)
const logger = createLogger();
//To get react store
const rootReducer = combineReducers({searchRobot, requestRobots})
const store = createStore( rootReducer, applyMiddleware(thunkMiddleWare, logger) );

ReactDOM.render(
  <Provider store={store}> 
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
