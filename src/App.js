import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person';

function App() {
  const [showList, setShowList] = useState(false);
  const [data, setData] = useState([
   {name: "ruben", age: 20},
   {name: "rubenOld", age: 21},
   {name: "rubenOlder", age: 22},
  ]);
  let persons = null;

  const showPersonHandler = () => {
    const res = showList===false ? true : false;
    setShowList(res);
  }
  if(showList){
    persons = (
      <div>
        {data.map((person) => {
        return (
          <Person name={person.name} age={person.age} />
        )
        })}  
      </div>
    );
  
  }

  return (
    <div className="App">
      <h1>Learning React Complete Guide</h1>
      <button onClick={showPersonHandler}>Show List/Hide List</button>
      {persons}
    </div>
  );
}

export default App;
