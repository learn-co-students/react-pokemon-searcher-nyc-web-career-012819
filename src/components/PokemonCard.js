import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: this.props.front
  }

  handleClick = () => {
    if(this.state.image === this.props.front){
      this.setState({image: this.props.back})
    } else {
      this.setState({image: this.props.front})
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
