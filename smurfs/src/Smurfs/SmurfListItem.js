import React, { Fragment } from 'react';

const SmurfListItem = ({ name, age, height, id }) => {
  return (
    <Fragment>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{height}</h4>
    </Fragment>
  );
};

export default SmurfListItem;
