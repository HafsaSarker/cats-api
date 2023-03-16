import { useState } from 'react'
import QueryRes from './Components/QueryRes'
import './App.css'

function App() {


  return (
    <div className="App">
      <div className="history">
        history
      </div>
      <div className="main-container">
        <h1>A fine caturday</h1>
        <h3>Paw-don me, but is this fur real?!</h3>
        <h3>😺</h3>
        <button>Discover</button>
      </div> 
      <div className="banned-list">
        Banned
      </div>
    </div>
  )
}

export default App
