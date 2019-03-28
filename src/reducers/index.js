import { ADD_HOTSPOT } from '../actions'
import { combineReducers } from 'redux'

const hotspots = (state = [], action) => {
    switch (action.type) {
        case ADD_HOTSPOT:
            let newState = [...state]
            newState.push(action.newHotspot)
            return newState
        default:
            return state
    }
}

export default combineReducers({
    hotspots
})