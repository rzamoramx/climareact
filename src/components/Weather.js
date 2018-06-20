//import React, { Component } from 'react'
import React from 'react'

const Weather = props => (
  <div className="weather__info">
    { 
      props.country && props.city && <p className="weather__key">Lugar: 
      <span className="weather__value"> {props.country}, {props.city}</span>
      </p> 
    }
    { 
      props.temperature && <p className="weather__key">Temp: 
      <span className="weather__value"> {props.temperature}</span>
      </p> 
    }
    { 
      props.humidity && <p className="weather__key">Humedad: 
      <span className="weather__value"> {props.humidity}</span>
      </p> 
    }
    { 
      props.description && <p className="weather__key">Condiciones: 
      <span className="weather__value"> {props.description}</span>
      </p> 
    }
    { 
      props.error && <p className="weather__error">{props.error}</p> 
    }
  </div>
)
export default Weather

// Al no usar mas caracteristicas de react nos ahorramos codigo
/*
export default class Weather extends Component {
  render() {
    return (
      <div>
        { this.props.country && this.props.city && <p>Lugar: {this.props.country}, {this.props.city}</p> }
        { this.props.temperature && <p>Temp: {this.props.temperature}</p> }
        { this.props.humidity && <p>Humedad: {this.props.humidity}</p> }
        { this.props.description && <p>Condiciones: {this.props.description}</p> }
        { this.props.error && <p>{this.props.error}</p> }
      </div>
    )
  }
}
*/
