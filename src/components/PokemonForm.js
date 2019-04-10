import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.changeHandler} value={this.state.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.changeHandler} value={this.state.hp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.changeHandler} value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.changeHandler} value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
