import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchedPokemons: [],
    value: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState({pokemons:pokemons, searchedPokemons:pokemons}))
  }

  search = e => {
    e.persist()
    const value = e.target.value

    console.log(value);
    const pokemonsArr = this.state.pokemons
    const filteredPokemons = pokemonsArr.filter(pokemonObj => pokemonObj.name.includes(value))
    this.setState(prevState => ({
      searchedPokemons: filteredPokemons
    }))
  }

// _.debounce(e => this.search(e), 500)

  addPokemon = pokemon => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    }).then(resp => resp.json())
      .then(pokemon => this.setState(prevState => ({
        pokemons: [...prevState.pokemons, pokemon],
        searchedPokemons: [...prevState.pokemons, pokemon]
      })))
  }

  render() {
    console.log(this.state.pokemons);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.search} showNoResults={this.state.pokemons.length === 0 ? true : false} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.searchedPokemons}/>
      </div>
    )
  }
}

export default PokemonPage
