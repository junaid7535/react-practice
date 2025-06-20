import React, { useState } from 'react';
import './App.css';

import Sub from './components/Sub';
import StateManagement from './components/IncCount'
import Props from './components/Props'
import Lists from './components/Lists';
import Child from './components/Child';
import Todo from './components/Todo';

const App = () => {
  const numbers = [1,2,3,4,5,6,7,8];
  const [name,SetName] = useState("Guest");

  return( 
    <div>
      <Sub/>
      <Lists items = {numbers}> </Lists>

      <Props items = {numbers}></Props>

      <h1>State Management</h1>
      <h2>Passing states between components</h2>
      <h2>Welcome ,{name}</h2>
      <Child setName={SetName}> </Child>
      <StateManagement/>
      <Todo></Todo>
      
    </div>
  );
}

export default App;
