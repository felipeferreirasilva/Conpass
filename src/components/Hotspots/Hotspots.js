import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';

const Hotspots = ({activeHotspotCreator, hotspots}) => {
    return (
        <Container style={stylesheet.container} className="m-auto">
            <div className="mb-5 text-center">
                <Button onClick={activeHotspotCreator} variant="info" className="rounded-pill" size="lg">Create Hotspot</Button>
            </div>
            <Table hover borderless>
                <thead className="bg-light">
                    <tr>
                        <th className="text-muted">List of Hotspots</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {hotspots.map((hotspot, index) => (
                        <tr key={index} className="border-bottom">
                            <td className="text-muted">Hotspot #{index + 1}</td>
                            <td className="text-right"><Button variant="link"><u>Delete</u></Button></td>
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
        width: '50%',
        height: '100vh'
    }
}

export default connect(mapStateToProps)(Hotspots)