import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter =15
  const addvalue = () => {
    console.log("clicked", math .random());
   counter = counter + 1
  }
  return (
    <>
      <h1>new cafe</h1>
      <h2>conter value: {counter}</h2> 
      <button onClick={addvalue}>add value {counter}</button>
      <br/>
      <button>remove value {counter}</button>
      <p>footer:{counter} </p>
    </>
  )
}

export default App
