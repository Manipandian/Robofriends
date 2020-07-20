import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from './constants.js';

//Redux Store

export const initialSearchState = {
    searchField: ''
}

//Reducer for redux(a pure function)

export const searchRobot = (state=initialSearchState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

export const initialRobotState = {
    isPending: false,
    robots: [],
    error: ''
    
}

export const requestRobots = (state=initialRobotState, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOT_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOT_SUCCESS:
            return Object.assign({}, state, {isPending: false, robots: action.payload});
        case REQUEST_ROBOT_FAILED:
            return Object.assign({}, state, {isPending: false, error: action.payload});
        default:
            return state;
    }
}