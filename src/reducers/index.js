import { ADD_HOTSPOT } from '../actions'
import { combineReducers } from 'redux'

const initialState = []

const hotspots = (state = initialState, action) => {
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