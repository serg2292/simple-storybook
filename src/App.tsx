import React from 'react';
import './App.css';
import { ButtonComponent } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent type='button' backgroundColor="#ff0" primary>Кнопка</ButtonComponent>
      </header>
    </div>
  );
}

export default App;
