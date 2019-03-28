import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addHotspot } from '../../actions'

import NavigationBar from '../NavigationBar/NavigationBar'
import Hotspots from '../Hotspots/Hotspots'

import Popover from '../Popover/Popover'

class App extends Component {
  state = {
    x: 0,
    y: 0,
    element: undefined,
    hotspotCreatorActive: false
  }

  // Captura a posição do mouse em tempo real
  onMouseMove = e => {
    this.setState({ x: e.pageX, y: e.pageY })
  }

  // Captura o elemento onde o mouse esta posicionado
  // Adiciona delay para não chamar metodo desnecessariamente
  onMouseOver = () => {
    if (this.state.hotspotCreatorActive) {
      setTimeout(() => {
        this.setState({
          element: document.elementFromPoint(this.state.x, this.state.y)
        })

        // Adiciona classe decorativa ao elemento onde o mouse esta posicionado
        if (this.state.element !== null) {
          this.state.element.classList.add('selectedElement')
        }
      }, 100)
    }
  }

  onMouseOut = () => {
    // Remove classe decorativa quando o mouse sair de cima do elemento
    if (this.state.element !== undefined && this.state.element !== null) {
      this.state.element.classList.remove('selectedElement')
    }
  }

  // Captura click do mouse na posição salva no state e adiciona ao array de hotspots
  onMouseClick = () => {
    if (this.state.hotspotCreatorActive) {
      
      let title = prompt('Titulo do hotspot')
      
      let newHotspot = {
        title: title,
        x: this.state.x,
        y: this.state.y
      }

      this.props.dispatch(addHotspot(newHotspot))

      this.setState({
        hotspotCreatorActive: false
      })
    }
  }

  activeHotspotCreator = () => {
    this.setState({
      hotspotCreatorActive: true
    })
  }

  render() {


    return (
      <div
        onMouseMove={e => this.onMouseMove(e)}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={this.onMouseClick}>

        <NavigationBar />
        <Hotspots activeHotspotCreator={this.activeHotspotCreator} />

        {/* Exibe os hotspots cadastrados */}
        {this.props.hotspots.map((hotspot, index) => (
          <Popover title={hotspot.title} x={hotspot.x} y={hotspot.y} />
        ))}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App);
