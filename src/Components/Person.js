/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AuthContext from '../context/auth-context';
import './styles.css';

const Person = (props) => {
  const { name, age } = props;
  // for functional component we call ->
  const authContext = useContext(AuthContext);
  // static contextType = AuthContext; better context & only class components type
  // to call we just call context or this.context
  /*
  <AuthContext.Consumer>
      {(context) => (
        <div className="person">
          {context.auth ? (
            <p>User is Authenticated</p>
          ) : (
            <p>User is Not Authenticated</p>
          )}
          <h1>
            Hello, my name is
            {name}
            , i am
            {age}
            Years Old!
          </h1>
        </div>
      )}
    </AuthContext.Consumer>
    */
  /* the following way is more simpler to use */
  return (
    <div className="person">
      {authContext.auth ? (
        <p>User is Authenticated</p>
      ) : (
        <p>User is Not Authenticated</p>
      )}
      <h1>
        Hello, my name is
        {name}
        , i am
        {age}
        Years Old!
      </h1>
    </div>
  );
};

export default Person;
