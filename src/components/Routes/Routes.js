import React from 'react'
import { Route } from 'react-router-dom'
import Hotspots from '../Hotspots/Hotspots'

import PropTypes from 'prop-types'

const Routes = props => {
    return (
        <Route exact path='/' render={() => (<Hotspots {...props} />)} />
    )
}

Routes.propTypes = {
    activeHotspotCreator: PropTypes.func,
    hotspotCreatorStatus: PropTypes.bool
}

export default Routes