import { useState } from 'react'
import  { PasswordInput } from "./components/PasswordInput.jsx"
import "./App.css"
function App() {

  return (
    <div className='App'>
      <h1>Password Tester</h1>
      <PasswordInput />
    </div>
  );
}

export default App
