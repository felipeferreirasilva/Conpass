import React from 'react'

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
            <div style={{ top: y, left: x, ...stylesheet.hotspot }}></div>
        </OverlayTrigger>
    )
}

const stylesheet = {
    hotspot: {
        border: '2px solid red',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderRadius: '10px',
        width: '20px',
        height: '20px',
        position: 'absolute'
    }
}

export default Popover