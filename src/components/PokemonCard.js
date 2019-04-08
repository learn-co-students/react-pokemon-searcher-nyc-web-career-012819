import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: false
  }

  clickHandler = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickHandler}>
            <img alt="oh no!" src={this.state.isClicked ? this.props.back : this.props.front}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
