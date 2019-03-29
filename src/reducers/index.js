import { ADD_HOTSPOT, DEL_HOTSPOT } from '../actions'
import { combineReducers } from 'redux'

// Cria estado inicial da store
let initialState = []

// Verifica se existe localstorate e adiciona ao estado inicial
if (localStorage.length > 0) {
    initialState = JSON.parse(localStorage.getItem('hotspots'))
}

const hotspots = (state = initialState, action) => {
    let newState = [...state]
    switch (action.type) {
        case ADD_HOTSPOT:
            // Adiciona novo hotspot ao array da store
            newState.push(action.newHotspot)
            return newState
        case DEL_HOTSPOT:
            // Remove da store o hotspot da posiçao passada pela action
            newState.splice(action.id, 1)
            return newState
        default:
            return state
    }
}

export default combineReducers({
    hotspots
})