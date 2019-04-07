import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const newPokemon = {}
    newPokemon.name = this.state.name
    newPokemon.stats = [{value: this.state.hp, name: 'hp'}]
    newPokemon.sprites = {front: this.state.frontUrl, back: this.state.backUrl}
    this.props.addPokemon(newPokemon)
  }

  changeHandler = e => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.changeHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.changeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.changeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
