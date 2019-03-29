import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { delHotspot } from '../../actions'
import { connect } from 'react-redux';

const Hotspots = ({ activeHotspotCreator, hotspotCreatorActive, hotspots, dispatch }) => {
    return (
        <Container style={stylesheet.container} className="m-auto">
            <div className="mb-5 text-center">
                <Button onClick={activeHotspotCreator} variant="info" className="rounded-pill" size="lg" disabled={hotspotCreatorActive}>Create Hotspot</Button>
            </div>
            <Table hover borderless className="col-md-6 m-auto">
                <thead className="bg-light">
                    <tr>
                        <th className="text-muted font-weight-normal">List of Hotspots</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {hotspots.map((hotspot, index) => (
                        <tr key={index} className="border-bottom">
                            <td className="text-muted">Hotspot #{index + 1}</td>
                            <td className="text-right"><Button variant="link" onClick={() => dispatch(delHotspot(index))}><u>Delete</u></Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

const mapStateToProps = state => {
    return state
}

const stylesheet = {
    container: {
        // width: '70%',
        height: '100vh'
    }
}

export default connect(mapStateToProps)(Hotspots)