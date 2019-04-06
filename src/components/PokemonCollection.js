import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    console.log(this.props);
    let pokemonArr = this.props.pokemons.map((pokemon) => {
      return <PokemonCard pokemonObj={pokemon} key={pokemon.name}/>
    })

    return (
      <Card.Group itemsPerRow={6}>
        { pokemonArr }
      </Card.Group>
    )
  }
}

export default PokemonCollection
