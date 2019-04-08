import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => this.setState({pokemons}))
  }

  handleSearch = (input) => {
      this.setState({search: input.value})
  }

  handleSubmit = (pokemonInfo) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: pokemonInfo.name,
        stats: [
          {
            value: pokemonInfo.hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: pokemonInfo.front,
          back: pokemonInfo.back
        }
      })
    })
    .then(resp => resp.json())
    .then(newPokemon => {
      let newPokemonArr = [...this.state.pokemons, newPokemon];
      this.setState({pokemons: newPokemonArr})
    })
  }


  render() {
    let filteredPokemons = this.state.pokemons.filter(poke => {
    return poke.name.includes(this.state.search)
    })

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce((_, data) => this.handleSearch(data), 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={filteredPokemons}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default PokemonPage
