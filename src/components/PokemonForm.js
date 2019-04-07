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

  handleSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.querySelector('#name')
    const hp = e.target.querySelector('#hp')
    const frontUrl = e.target.querySelector('#frontUrl')
    const backUrl = e.target.querySelector('#backUrl')

    return fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          stats: [{
            "value": parseInt(hp.value),
            "name": "hp"
          }],
          sprites :{
            front: frontUrl.value,
            back: backUrl.value
          }
        })
    })
    .then(res => res.json())
    .then(pokemon => this.props.update(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" id='name' />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" id='hp' />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" id='frontUrl' />
            <Form.Input fluid label="Back Image URL" placeholder="url" id='backUrl'name="backUrl" />
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
