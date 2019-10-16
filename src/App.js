import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(data => this.setState({pokemons: data}))
  }

  newPokemon = (pokeObj) => {
    console.log(pokeObj)
    let {name, hp, frontUrl, backUrl} = pokeObj

    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        stats: [{value: hp, name: 'hp'}],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    }

    // let {pokemons} = this.state

    fetch('http://localhost:3000/pokemon', configObj)
    .then(r => r.json())
    .then(newPokemonObj => this.setState({
      pokemons: [...this.state.pokemons, newPokemonObj]
    }))

    console.log(this.state.pokemons)
  }

  render() {

    return (

      <div className="App">
      <PokemonIndex pokemons={this.state.pokemons} newPokemon={this.newPokemon} />
      </div>

    )
  }
}


export default App
