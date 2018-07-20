import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Smurfs extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    smurfs: {},
    loading: true
  };

  componentDidMount() {
    const request = axios.get('http://localhost:3333/smurfs/');

    request
      .then(res => {
        this.setState({ smurfs: res.data, loading: false });
      })
      .catch(err => {
        console.warn('Something bad happened');
      });
  }

  handleAddSmurf = smurf => {
    const request = axios.post('http://localhost:3333/smurfs/', smurf);

    this.setState(prevState => ({
      ...prevState,
      smurfs: [...prevState.smurfs, smurf]
    }));

    request
      .then(res => {
        console.log('success');
      })
      .catch(err => console.log(err));
  };

  render() {
    const smurfs = {
      smurfs: this.state.smurfs,
      handleAddSmurf: this.handleAddSmurf
    };
    if (this.state.loading) {
      return <h2>Loading..</h2>;
    }
    console.log(this.state.smurfs);
    return this.props.children(smurfs);
  }
}

export default Smurfs;
