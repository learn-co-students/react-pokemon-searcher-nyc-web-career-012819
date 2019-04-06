import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(recievedPokemons => this.setState({pokemons: recievedPokemons}))
  }

  searchChangeHandler = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  filterPokemons = () =>{
    return this.state.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  createPokemon = (newPokemon) => {
    console.log(newPokemon);
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.front,
          back: newPokemon.back
        }
      })
    })
    .then(resp => resp.json())
    .then(newpoke => console.log(newpoke))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.searchChangeHandler} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.filterPokemons()}/>
        <br />
        <PokemonForm createPokemon={newPokemon => this.createPokemon(newPokemon)}/>
      </div>
    )
  }
}

export default PokemonPage
