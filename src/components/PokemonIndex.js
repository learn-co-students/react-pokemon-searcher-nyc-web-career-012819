import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemonFetch: [],
    value: ''
  };

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemons => {
      this.setState({pokemonFetch: pokemons})
    })
  }

  setValue = (event) => {
    this.setState({value: event.target.value})
  }

  filterPokemons = () => {
    return this.state.pokemonFetch.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.value.toLowerCase()))
  }

  postNewPokemon = (newPokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    })
    .then(response => response.json())
    .then(pokemon => {
      const newArray = [...this.state.pokemonFetch];
      newArray.unshift(pokemon)
      this.setState({pokemonFetch: newArray})
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.setValue} showNoResults={false} value={this.state.value}/>
        <PokemonForm postNewPokemon={this.postNewPokemon}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemons()}/>
        <br />
      </div>
    )
  }
}

export default PokemonPage
