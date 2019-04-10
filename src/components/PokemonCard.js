import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: true
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    // console.log(this.state.clicked);
    return (
      <Card>
        <div onChange={this.props.onSearchChange}>
          <div className="image" onClick={this.clickHandler}>
            {this.state.clicked ? <img alt="" src={this.props.pokemon.sprites.front}/> : <img alt="" src={this.props.pokemon.sprites.back}/>}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats ? this.props.pokemon.stats[5].value : this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
