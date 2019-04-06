import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(pokemons => this.setState({ pokemons }));
  }

  createPokemon = newPokemonInfo => {
    // console.log(newPokemonInfo);
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPokemonInfo.name,
        hp: newPokemonInfo.hp,
        sprites: {
          front: newPokemonInfo.frontUrl,
          back: newPokemonInfo.backUrl
        }
      })
    })
      .then(r => r.json())
      .then(pokemon =>
        this.setState({ pokemons: [...this.state.pokemons, pokemon] })
      );
  };

  searchListener = e => {
    this.setState({ searchTerm: e.target.value });
  };

  pokemonFilter = () => {
    return this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm);
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.searchListener} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.pokemonFilter()} />
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
