import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from './constants.js';

//Redux Action

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
}

export const setRequestRobot = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOT_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => dispatch({type: REQUEST_ROBOT_SUCCESS, payload: response}))
    .catch(err => dispatch({type: REQUEST_ROBOT_FAILED, payload: err}))
}