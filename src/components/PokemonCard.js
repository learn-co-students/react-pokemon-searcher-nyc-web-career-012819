import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    clicked: false
  };

  clickListener = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const pokemon = this.props.pokemon;
    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickListener}>
            {this.state.clicked ? (
              <img src={pokemon.sprites.back} alt={pokemon.name} />
            ) : (
              <img src={pokemon.sprites.front} alt={pokemon.name} />
            )}
          </div>
          <div className="content">
            <div className="header">
              <strong>{pokemon.name}</strong>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {pokemon.stats ? pokemon.stats[5].value : pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
