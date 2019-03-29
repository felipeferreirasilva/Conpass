import { ADD_HOTSPOT, DEL_HOTSPOT } from '../actions'
import { combineReducers } from 'redux'

let initialState = []

if (localStorage.length > 0) {
    initialState = JSON.parse(localStorage.getItem('hotspots'))
}

const hotspots = (state = initialState, action) => {
    let newState = [...state]
    switch (action.type) {
        case ADD_HOTSPOT:
            newState.push(action.newHotspot)
            return newState
        case DEL_HOTSPOT:
            newState.splice(action.id, 1)
            return newState
        default:
            return state
    }
}

export default combineReducers({
    hotspots
})