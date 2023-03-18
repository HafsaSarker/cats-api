import { useState, useEffect } from 'react'
import QueryRes from './Components/QueryRes'
import History from './Components/History';
import './App.css'

function App() {
  const [allCats, setAllCats] = useState([]);
  const [history, setHistory] = useState([
    {
      name: null, 
      imgSrc: null
    }
  ]);
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

  useEffect(() => {
    async function getAPI() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds",{headers: {
        'x-api-key': api_key
      }})
      const queryData = await response.json();

      //filter data so only data with displayed attributes are in the state allCats
      const FilteredData = queryData.filter(element => 
        element.name && element.origin && element.affection_level && element.energy_level && element.weight.imperial && element.image?.url != null
      );

      //console.log(FilteredData);

      //set it to allCats state var
      setAllCats(FilteredData);
    }
    getAPI();
  },[])
  
  const getRandomCat = () => {

  }
  
/*
  const getIndex = () => {
    let randNum = Math.floor(Math.random() * 65)
    return randNum;
  }
  const handleQuery = (query) => {
    let randIndex = getIndex();
    setIndex(randIndex);

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

    setHistory((prevCats) => [...prevCats, {name: name, imgSrc: image.url}]);
    console.log(history);
    setShowData(true);
    // console.log(data);
  }

  */
  return (
    <div className="App">
      {/* <History history={history}/>

      <div className="main-container">
        <h1>A fine caturday</h1>
        <h3>Paw-don me, but is this fur real?!</h3>
        <h3>😺</h3>
        
        {showData && <QueryRes data={data}/>}
        <button onClick={makeQuery}>Discover</button>
      </div> 
      <div className="banned-list">
        Banned
      </div> */}
    </div>
  )
}

export default App
