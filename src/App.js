import React, { Component } from 'react';

import Titles from "./components/Titles"
import Form from './components/Form'
import Weather from './components/Weather'

import './App.css'
import { APY_KEY, API_URL } from './Const'

class App extends Component {
  // Cada que un state cambia alguno de sus valores, se vuelve a ejecutar 
  // la rutina que usa uno o mas de sus propiedades, pues un state es un objeto
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // Funcion flecha asincrona, necesario para usar los await y para que no
  // se detenga el hilo de ejecucion principal de javascript
  getWeather = async (e) => {
    e.preventDefault()
    let city = e.target.elements.city.value
    let country = e.target.elements.country.value

    // se usa un await para esperar el resultado de una promesa de esta manera la ejecucion no sigue
    // hasta que no se resuelve la promesa, solo se usan await dentro de funciones async
    // fetch retorna una promesa al hacer una peticion a la api
    const apiCall = await fetch(`${API_URL}q=${city},${country}&appid=${APY_KEY}&units=metric`)

    // los await tratan como resolved promise la expresion delante de el. Esto es necesario para esperar
    // el resultado de lo contrario seguira la ejecucion
    const data = await apiCall.json();

    //console.log(data);

    // Solo si hay valores se ejecuta el state
    if (country && city) {
      // Usamos setState para actualizar valores obtenidos
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Por favor introduce valores correctos.'
      })
    }
  }

  render() {
    // se usa props para adjuntar el metodo getWeather en el componente Form
    // y para las propiedades que el componente Weather usara
    return (
      <div className="container shadow">
        <div className="row">
          <div className="col-xs-5 col-sm-5 col-lg-5 title-container">                
            <Titles />
          </div>
          <div className="col-xs-7 col-sm-7 col-lg-7 form-container">
            <Form getWeather={this.getWeather} />
            <Weather 
              temperature={this.state.temperature} 
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
