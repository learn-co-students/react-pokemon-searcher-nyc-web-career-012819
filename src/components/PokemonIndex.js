import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import { Search } from 'semantic-ui-react';

const API_URL = 'http://localhost:3000/pokemon';

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchInput: '',
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => this.setState({ pokemons: json }));
  }

  handleSearch = e => {
    this.setState({ searchInput: e.target.value });
  }

  handleAddPokemon = params => {
    const newParams = { 
      "name": params.name,
      "stats": [
        {
          "value": params.hp,
          "name": "hp"
        }
      ],
      "sprites": {
        "front": params.frontUrl,
        "back": params.backUrl
      }
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(newParams),
    })
      .then(response => response.json())
      .then(response => this.setState({
        pokemons: [...this.state.pokemons, response]
      }))
      .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1><br />
        <Search 
          onSearchChange={this.handleSearch} 
          showNoResults={false} 
          value={this.state.searchInput}
        /><br />
        <PokemonCollection 
          data={
            this.state.searchInput === '' ?
              this.state.pokemons :
              this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchInput))
          }
        /><br />
        <PokemonForm submitToParent={this.handleAddPokemon} />
      </div>
    )
  }
}

export default PokemonPage;
