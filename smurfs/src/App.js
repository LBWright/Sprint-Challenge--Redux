import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Smurfs, { SmurfList, SmurfListItem, NewSmurfForm } from './Smurfs';

class App extends Component {
  render() {
    return (
      <div>
        <h1>From App</h1>
        <Smurfs>
          {({ smurfs, handleAddSmurf }) => (
            <Fragment>
              <NewSmurfForm handleAddSmurf={handleAddSmurf} />
              <SmurfList smurfs={smurfs} />
            </Fragment>
          )}
        </Smurfs>
      </div>
    );
  }
}

export default App;
