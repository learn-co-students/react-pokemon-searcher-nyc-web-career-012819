import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: true
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.clickHandler} className="image">
            <img src={this.state.clicked? this.props.pokemon.sprites.front: this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
