import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';

class Hotspots extends Component {
    render() {
        return (
            <Container style={stylesheet.container} className="m-auto">
                <div className="mb-5 text-center">
                    <Button onClick={this.props.activeHotspotCreator} variant="info" className="rounded-pill" size="lg">Create Hotspot</Button>
                </div>
                <Table hover borderless>
                    <thead className="bg-light">
                        <tr>
                            <th className="text-muted">List of Hotspots</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.hotspots.map((hotspot, index) => (
                            <tr key={index} className="border-bottom">
                                <td className="text-muted">Hotspot #{index + 1}</td>
                                <div className="text-right">
                                    <Button variant="link"><u>Delete</u></Button>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
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