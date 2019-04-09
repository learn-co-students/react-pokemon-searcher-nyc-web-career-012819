import React, { Fragment, Component } from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {
            this.props.data.map(pokemon => 
              <PokemonCard 
                key={pokemon.id} 
                name={pokemon.name}
                hp={pokemon.stats[pokemon.stats.length - 1].value}
                img={pokemon.sprites}
              />
            )
          }
        </Card.Group> 
      </Fragment>
    )
  }
}

export default PokemonCollection;
