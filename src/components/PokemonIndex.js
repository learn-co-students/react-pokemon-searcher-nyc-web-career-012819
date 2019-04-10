import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    console.log("App is mounted");
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => this.setState({ pokemons }))
  }

  changeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (pokemon) => {
    let newArr = [...this.state.pokemons, pokemon]
    this.setState({
      pokemons: newArr
    })
  }

  render() {
    let filtered = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.changeHandler} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={filtered}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
