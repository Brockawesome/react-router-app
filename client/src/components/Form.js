import React from 'react';

class Form extends React.Component {
  defaultValues = { name: '', price: '', description: '', department: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }
    
  handleSubmit = (e) => {
    e.preventDefault()
    let product = { ...this.state }
    this.props.submit(product)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e
    this.setState({ [id]: value })
  }

  render() {
    let { name, price, description, department } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          id="price"
          placeholder="price"
          value={price}
          onChange={this.handleChange}
        />
        <input
          id="description"
          placeholder="description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          id="department"
          placeholder="department"
          value={department}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;