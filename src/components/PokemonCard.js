import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickHandler}>
            {this.state.clicked ?
              <img alt="oh no!" src={this.props.pokemon.sprites.back}/>
              :
              <img alt="oh no!" src={this.props.pokemon.sprites.front}/>
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.slice(-1)[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
