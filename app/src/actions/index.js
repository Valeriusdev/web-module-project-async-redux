import axios from 'axios';

export const FETCH_FOXES = 'FETCH_FOXES';
export const UPDATE_FOXES = 'UPDATE_FOXES';
export const SET_ERROR = 'SET_ERROR';

export const getFoxes = () => dispatch => {
    dispatch ({type: FETCH_FOXES})
    axios
    .get('https://randomfox.ca/floof/')
    .then(res => {
        dispatch({ type: UPDATE_FOXES, payload: res.data })
    })
    .catch( err => {
      console.log(err.message, 'Error getting data')  
      dispatch({ type: SET_ERROR, payload: 'There was en error fetching foxes data in actions'}) 
    })
}

