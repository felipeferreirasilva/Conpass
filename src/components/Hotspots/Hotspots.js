import React from 'react'

//Redux
import { delHotspot } from '../../actions'
import { connect } from 'react-redux';

// Importa components do Bootstrap
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Popover from '../Popover/Popover'

import PropTypes from 'prop-types'

const Hotspots = ({ activeHotspotCreator, hotspotCreatorStatus, hotspots, dispatch }) => {
    return (
        <Container className="m-auto text-center">
            {/* // Botao que ativa o rastreio para iniciar cadastramento de Hotspots */}
            <Button onClick={activeHotspotCreator} variant="info" className="rounded-pill my-5" size="lg" disabled={hotspotCreatorStatus}>Create Hotspot</Button>
            <Table hover borderless className="col-md-6 m-auto">
                <thead className="bg-light">
                    <tr>
                        <th className="text-muted text-left font-weight-normal">List of Hotspots</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Imprime a lista de Hotspots cadastrados */}
                    {hotspots.map((_, index) => (
                        <tr key={index} className="border-bottom">
                            <td className="text-left text-muted">Hotspot #{index + 1}</td>
                            <td className="text-right"><Button variant="link" onClick={() => dispatch(delHotspot(index))}><u>Delete</u></Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Imprime na tela os hotspots cadastrados */}
            {hotspots.map((hotspot, index) => (
                <Popover key={index} title={hotspot.title} message={hotspot.message} x={hotspot.x} y={hotspot.y} />
            ))}
        </Container>
    )
}

const mapStateToProps = state => {
    return state
}

Hotspots.propTypes = {
    activeHotspotCreator: PropTypes.func,
    hotspotCreatorStatus: PropTypes.bool,
    hotspots: PropTypes.array,
    dispatch: PropTypes.func
}

export default connect(mapStateToProps)(Hotspots)