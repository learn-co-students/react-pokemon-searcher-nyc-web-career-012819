import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: '',
      hp: '',
      front: '',
      back: ''
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChange} fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input onChange={this.handleChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={this.handleChange} fluid label="Front Image URL" placeholder="url" name="front" value={this.state.front} />
            <Form.Input onChange={this.handleChange} fluid label="Back Image URL" placeholder="url" name="back" value={this.state.back}/>
          </Form.Group>
          <Form.Button onClick={() => this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
