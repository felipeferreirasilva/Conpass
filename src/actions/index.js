export const ADD_HOTSPOT = 'ADD_HOTSPOT'
export const DEL_HOTSPOT = 'DEL_HOTSPOT'

export const addHotspot = newHotspot => {
    return {
        type: ADD_HOTSPOT,
        newHotspot
    }
}

export const delHotspot = id => {
    return {
        type: DEL_HOTSPOT,
        id
    }
}