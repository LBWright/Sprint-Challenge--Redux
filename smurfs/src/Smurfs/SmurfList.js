import React from 'react';
import SmurfListItem from './SmurfListItem';

const SmurfList = ({ smurfs }) => {
  return (
    <ul>{smurfs.map(smurf => <SmurfListItem {...smurf} key={smurf.id} />)}</ul>
  );
};

export default SmurfList;
