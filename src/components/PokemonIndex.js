import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {


  state = {
    pokemons: [],
    filteredPokemon: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons: pokemons}))
  }


  changeHandler = (e) =>{
    e.preventDefault()
    let filteredPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(e.target.value))
    this.setState({filteredPokemon: filteredPokemon})
  }

    update = (props) =>{
      this.setState({pokemons: [...this.state.pokemons, props]})
    }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.changeHandler} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemon ? this.state.filteredPokemon :this.state.pokemons} />
        <br />
        <PokemonForm update={this.update}/>
      </div>
    )
  }
}

export default PokemonPage
