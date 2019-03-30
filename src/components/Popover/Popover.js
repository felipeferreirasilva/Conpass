import React from 'react'
import PropTypes from 'prop-types'

// Importa compoenents do Bootstrap
import PopoverBs from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Popover = ({ title, message, x, y }) => {
    const popover = (
        <PopoverBs id="popover-basic" title={title}>
            {`${message}`}
        </PopoverBs>
    )

    return (
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
            {/* Subatrai 10px de cada coordenada para alinhar o hotspot na posição central da seta do mouse */}
            <div style={{ top: y - 10, left: x - 10, ...stylesheet.hotspot }}></div>
        </OverlayTrigger>
    )
}

const stylesheet = {
    hotspot: {
        border: '2px solid red',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        boxShadow: 'inset 0 0 0 1px white',
        borderRadius: '20px',
        width: '25px',
        height: '25px',
        position: 'absolute'
    }
}

Popover.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}

export default Popover
