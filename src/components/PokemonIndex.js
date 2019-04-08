import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searched: ""
  }

  handleSearch = (data) => {
    this.setState({searched: data.value})
  }

  handleSumbit = (pokemon) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: pokemon.name,
        stats: [
          {
            value: pokemon.hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: pokemon.frontUrl,
          back: pokemon.backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(newPokemon => {
        let newArr = [...this.state.pokemons, newPokemon];
        this.setState({pokemons: newArr})
      })
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => this.setState({pokemons: data}))
  }

  render() {
    let searched = this.state.pokemons.filter(pokemon => ( pokemon.name.includes(this.state.searched)))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce((_, data) => this.handleSearch(data), 500)}
          showNoResults={false} />
        <br />
        <PokemonCollection pokemons={searched}/>
        <br />
        <PokemonForm handleSubmit={this.handleSumbit}/>
      </div>
    )
  }
}

export default PokemonPage
