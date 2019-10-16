import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(props) {
    super(props)
    // console.log('inside constructor', this.props)
    this.state = {
      // filteredPokemons: [...props.pokemons],
      searchInput: ""
    }
  }

  // componentDidMount() {
  //
  // }

  handleSearchChange = (e, { value }) => {
    console.log('🤔')
    this.setState({searchInput: value})
  }

  pokemonsList = () => {
    let filtered = this.props.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchInput))

    return filtered
  }



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm newPokemon={this.props.newPokemon} />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />

        <br />
        <PokemonCollection pokemons={this.pokemonsList()} />
        <br />
      </div>
    )
  }
}

export default PokemonPage
