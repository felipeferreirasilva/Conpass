import { ADD_HOTSPOT, DEL_HOTSPOT } from '../actions'
import { combineReducers } from 'redux'

const hotspots = (state = [], action) => {
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