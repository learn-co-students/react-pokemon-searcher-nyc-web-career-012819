import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends Component {
  state = {
    frontImageIsShown: true,
  }

  flipImage = () => {
    this.setState({
      frontImageIsShown: !this.state.frontImageIsShown,
    });
  }

  render() {
    
    return (
      <Card onClick={this.flipImage}>
        <div>
          <div className="image">
            <img 
              src={this.state.frontImageIsShown ? this.props.img.front : this.props.img.back} 
              alt={this.props.name}
            />
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
    );
  }
}

export default PokemonCard;
