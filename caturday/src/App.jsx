import { useState } from 'react'
import QueryRes from './Components/QueryRes'
import './App.css'

function App() {
  const [data, setData] = useState({
    name: "",
    origin: "",
    weight: null,
    affectionLevel: null,
    energyLevel: null,
    imgSrc: ""
  })

  const makeQuery = () => {
    let query = "https://api.thecatapi.com/v1/images/0XYvRd7oD";

    callAPI(query);
  }

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();

    const { name, affection_level, origin, energy_level, weight} = json.breeds[0];

    setData(prevState => (
      {
        ...prevState,
        name: name,
        origin: origin,
        weight: weight.imperial,
        affectionLevel: affection_level,
        energyLevel: energy_level,
        imgSrc: json.url
      }
    ))
    console.log(data);
  }

  return (
    <div className="App">
      <div className="history">
        history
      </div>
      <div className="main-container">
        <h1>A fine caturday</h1>
        <h3>Paw-don me, but is this fur real?!</h3>
        <h3>😺</h3>
        <QueryRes data={data}/>
        <button onClick={makeQuery}>Discover</button>
      </div> 
      <div className="banned-list">
        Banned
      </div>
    </div>
  )
}

export default App
