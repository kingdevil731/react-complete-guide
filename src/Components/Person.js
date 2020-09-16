/* eslint-disable react/prop-types */
import React from 'react';

const Person = (props) => {
  const { name, age } = props;
  return (
    <h1>
      Hello, my name is
      {name}
      , i am
      {age}
      Years Old!
    </h1>
  );
};

export default Person;
