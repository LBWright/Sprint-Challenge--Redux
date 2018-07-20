import React, { Component, Fragment } from 'react';

class NewSmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.handleAddSmurf(smurf);
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <Fragment>
        <h3>Add a Smurf</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            name="name"
            value={name}
            type="text"
            onChange={this.handleInputChange}
          />
          <input
            placeholder="age"
            name="age"
            value={age}
            type="text"
            onChange={this.handleInputChange}
          />
          <input
            placeholder="height"
            name="height"
            value={height}
            type="text"
            onChange={this.handleInputChange}
          />
          <button>Add</button>
        </form>
      </Fragment>
    );
  }
}

export default NewSmurfForm;
