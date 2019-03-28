export const ADD_HOTSPOT = 'ADD_HOTSPOT'

export const addHotspot = newHotspot => {
    return {
        type: ADD_HOTSPOT,
        newHotspot
    }
}