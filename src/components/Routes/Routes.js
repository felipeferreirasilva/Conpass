import React from 'react'
import { Route } from 'react-router-dom'

import Hotspots from '../Hotspots/Hotspots'

const Routes = props => {
    return (
        <Route exact path='/' render={() => (<Hotspots {...props} />)} />
    )
}

export default Routes