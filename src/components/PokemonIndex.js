import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({pokemons:pokemon}))

  }

  changeHandler = (event) => {
    this.setState({search: event.target.value})
  }


  submitHandler = (props) => {
    let newArray = [...this.state.pokemons, props]
    this.setState({pokemons: newArray})
  }

  render() {
    let search = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.changeHandler} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={search}/>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
      </div>
    )
  }
}

export default PokemonPage
