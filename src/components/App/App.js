import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'
import { addHotspot } from '../../actions'

// Importa components do React-Bootstrap
import NavigationBar from '../NavigationBar/NavigationBar'
import Routes from '../Routes/Routes'

class App extends Component {
  state = {
    // Cordanadas do mouse
    x: 0,
    y: 0,
    // Elemento onde o mouse se encontra
    element: undefined,
    // Ativa o rastreio de elementos e criaçao do hotspot
    hotspotCreatorStatus: false
  }

  // Captura a posição do mouse em tempo real
  onMouseMove = e => {
    this.setState({ x: e.pageX, y: e.pageY })
  }

  // Captura o elemento onde o mouse esta posicionado
  // Adiciona delay para não chamar metodo desnecessariamente
  onMouseOver = () => {
    if (this.state.hotspotCreatorStatus) {
      setTimeout(() => {
        // Salva elemento apontado no state
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

  // Captura click do mouse
  onMouseClick = () => {
    // Verifica se o botao criar hotspot foi clicado
    if (this.state.hotspotCreatorStatus) {
      // Pergunta o Titulo do hotspot
      let title = prompt('Titulo do hotspot')
      // Pergunta a Mensagem do hotspot
      let message = prompt('Mensagem do hotspot')
      // Verifica se titulo e mensagem são validos (!vazio e !null)
      if (title !== null && title !== '' && message !== null && message !== '') {
        // Cria variavel com novo hotspot
        let newHotspot = {
          title: title,
          message: message,
          x: this.state.x,
          y: this.state.y
        }
        // Envia hotspot para a action e posteriormente é adicionado a store
        this.props.dispatch(addHotspot(newHotspot))
      }
      // Após finalizar a criaçao do hotspot desativa o rastreio para a criaçao de um novo hotspot
      this.setState({
        hotspotCreatorStatus: false
      })
    }
  }

  // Ativa o rastreio para a criaçao de um novo hotspot
  activeHotspotCreator = () => {
    this.setState({
      hotspotCreatorStatus: true
    })
  }

  render() {
    return (
      <div onMouseMove={e => this.onMouseMove(e)} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.onMouseClick}>
        <NavigationBar />
        <Routes activeHotspotCreator={this.activeHotspotCreator} hotspotCreatorStatus={this.state.hotspotCreatorStatus} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App);
