import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemons = this.props.pokemons.map(pokeObj => {
      let {name, sprites: {front, back}, stats } = pokeObj
      let hp = stats.find(stat => stat.name === "hp").value
      return <PokemonCard key={pokeObj.id} name={name} front={front} back={back} hp={hp}/>})

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemons}
      </Card.Group>
    )
  }
}

export default PokemonCollection
