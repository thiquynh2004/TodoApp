import React from 'react';
import './App.css';
import { Todo } from './features/Todo/Todo';

function App (): JSX.Element {
  return (
    <div className='App'>
      <Todo/>
    </div>
  );
}

export default App;
