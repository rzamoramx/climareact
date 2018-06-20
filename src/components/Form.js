import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    // se usa props para mandar los inputs del formulario para que el metodo getWeather 
    // Pueda usar dichos datos
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Ciudad..." />
        <input type="text" name="country" placeholder="Pais..." />
        <button>Obtener clima</button>
      </form>
    )
  }
}
