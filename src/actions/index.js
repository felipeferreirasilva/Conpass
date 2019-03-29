export const ADD_HOTSPOT = 'ADD_HOTSPOT'
export const DEL_HOTSPOT = 'DEL_HOTSPOT'

export const addHotspot = newHotspot => {
    // Salva o hotspot novo no localstorage
    if (localStorage.length > 0) {
        let hotspots = JSON.parse(localStorage.getItem('hotspots'))
        hotspots.push(newHotspot)
        localStorage.setItem('hotspots', JSON.stringify(hotspots))
    } else {
        localStorage.setItem('hotspots', JSON.stringify([newHotspot]))
    }
    // Envia o hotspot novo para a store
    return {
        type: ADD_HOTSPOT,
        newHotspot
    }
}

export const delHotspot = id => {
    // Deleta o hotspot no localstorage
    let hotspots = JSON.parse(localStorage.getItem('hotspots'))
    hotspots.splice(id, 1)
    localStorage.setItem('hotspots', JSON.stringify(hotspots))
    // Envia o Id do hotspot para ser deletado na store
    return {
        type: DEL_HOTSPOT,
        id
    }
}
