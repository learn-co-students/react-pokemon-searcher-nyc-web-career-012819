import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let pokemons = this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon} />)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection
