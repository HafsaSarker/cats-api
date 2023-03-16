import { useState } from 'react'
import QueryRes from './Components/QueryRes'
import './App.css'

function App() {
  const api_key = "live_mvxUhH8P2fgmeBund7bjWL4t7DRrGOZtouA6bIK6pvJEQkWcr468kh4xTqlgQOYk";
  const [data, setData] = useState({
    name: "",
    origin: "",
    weight: null,
    affectionLevel: null,
    energyLevel: null,
    imgSrc: ""
  })
  const [showData, setShowData] = useState(false);
  const makeQuery = () => {
    let query = "https://api.thecatapi.com/v1/breeds";

    //callAPI(query);
    getAPI(query);
  }
  async function getAPI(url) {
    try {
      const response = await
      fetch(url,{headers: {
        'x-api-key': api_key
      }})
      if(!response.ok){
        console.log(response.status);
      }
      const data = await response.json();
      console.log(data);
    }
    catch (error) {
      console.log({error});
    }
  }
  const callAPI = async (query) => {
    const response = await fetch(query, {headers: {
      'x-api-key': api_key 
    }})
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
    setShowData(true);
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
        
        {showData && <QueryRes data={data}/>}
        <button onClick={makeQuery}>Discover</button>
      </div> 
      <div className="banned-list">
        Banned
      </div>
    </div>
  )
}

export default App
