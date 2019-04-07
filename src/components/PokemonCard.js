import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    pic: true
  }

  pokemonHp = () => {
    return this.props.pokemon.stats ? this.props.pokemon.stats[5].value : this.props.pokemon.hp
  }

  flipPic = () => {
    this.setState({pic: !this.state.pic})
  }

  showPic = () => {
    return this.state.pic ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
  }

  render() {
    return (
      <Card key={this.props.pokemon.id}>
        <div>
          <div className="image" onClick={this.flipPic}>
            <img alt="oh no!" src={this.showPic()}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.pokemonHp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
