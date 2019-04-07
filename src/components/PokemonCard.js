import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    hp: '',
    clicked: false
  }


  componentDidMount(){
    this.props.stats.forEach(stat => {
      if (stat.name === "hp"){
        this.setState({hp: stat.value})
      }
    })
  }

  clickListener(){
    let click = this.state.clicked
    console.log(click)
    this.setState({clicked: !click})
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={()=> this.clickListener()}>
            <img src={this.state.clicked ? this.props.sprites.back : this.props.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.state.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
