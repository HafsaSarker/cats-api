import { useState } from 'react'
import QueryRes from './Components/QueryRes'
import History from './Components/History';
import './App.css'

function App() {
  const [history, setHistory] = useState([{name: "", imgSrc: ""}]);
  const [data, setData] = useState({
    name: "",
    origin: "",
    weight: null,
    affectionLevel: null,
    energyLevel: null,
    imgSrc: ""
  })
  const [index, setIndex] = useState(0);
  const [showData, setShowData] = useState(false);

  const api_key = "live_mvxUhH8P2fgmeBund7bjWL4t7DRrGOZtouA6bIK6pvJEQkWcr468kh4xTqlgQOYk";
  
  async function getAPI() {
    try {
      const response = await
      fetch(url,{headers: {
        'x-api-key': api_key
      }})
      if(!response.ok){
        console.log(response.status);
      }
      const QueryData = await response.json();
      handleQuery(QueryData);
    }
    catch (error) {
      console.log({error});
    }
  }

  const makeQuery = () => {
    let url = "https://api.thecatapi.com/v1/breeds";

    callAPI(url);
  }
  const getIndex = () => {
    let randNum = Math.floor(Math.random() * 66)
    return randNum;
  }
  const callAPI = async (query) => {
    let randIndex = getIndex();
    setIndex(randIndex);

    const response = await fetch(query, {headers: {
      'x-api-key': api_key 
    }})
    const json = await response.json();
    //console.log(json)
    const { name, affection_level, origin, energy_level, weight, image} = json[index];

    setData(prevState => (
      {
        ...prevState,
        name: name,
        origin: origin,
        weight: weight.imperial,
        affectionLevel: affection_level,
        energyLevel: energy_level,
        imgSrc: image.url
      }
    ))

    setHistory((prevCats) => [...prevCats, {name: name, imgSrc: image.url}])
    setShowData(true);

    // console.log(data);
  }

  return (
    <div className="App">
      <History history={history} />
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
