import { useState } from 'react'
import  { PasswordInput } from "./components/PasswordInput.jsx"
import "./App.css"
import { PasswordGenerator } from './components/GeneratePassword.jsx';
function App() {

  return (
    <div className='App'>
      <h1>Tester de Contraseñas</h1>
      <PasswordInput />
      <h1>Generador de Contraseñas</h1>
      <PasswordGenerator/>
    </div>
  );
}

export default App
