import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    let hp = this.props.pokemonObj.stats.find((stat) => {
      return (stat['name']==='hp')
    })

    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickHandler}>
            {this.state.clicked? <img alt="oh no!" src={this.props.pokemonObj.sprites.back} /> : <img alt="oh no!" src={this.props.pokemonObj.sprites.front} />}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp['value']}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
