/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person';
import AuthContext from './context/auth-context';

function App() {
  const [showList, setShowList] = useState(false);
  const [authe, setAuthe] = useState(false);
  const [data, setData] = useState([
    { name: 'ruben', age: 20 },
    { name: 'rubenOld', age: 21 },
    { name: 'rubenOlder', age: 22 },
  ]);
  let persons = null;

  const showPersonHandler = () => {
    const res = showList === false;
    setShowList(res);
  };

  const loginHandler = () => {
    setAuthe(!authe);
  };

  if (showList) {
    persons = (
      <div>
        {data.map((person) => (
          <Person name={person.name} age={person.age} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Learning React Complete Guide</h1>
      <button type="button" onClick={loginHandler}>Login</button>
      <button type="button" onClick={showPersonHandler}>
        Show List/Hide List
      </button>
      <AuthContext.Provider
        value={{
          auth: authe,
          login: loginHandler,
        }}
      >
        {persons}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
