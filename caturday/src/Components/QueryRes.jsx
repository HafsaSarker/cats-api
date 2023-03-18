export default function QueryRes({data, setBannedList}){
    
    const handleClick = (event) => {
        console.log(event.target.value);
        setBannedList((prevState) => [...prevState, event.target.value]);
    }
    
    return (
        <div className="queryRes">
               <h2>{data.name}</h2>
                <div className="attributes">
                    <label>
                        origin: 
                        <button 
                            onClick={handleClick} value={data.origin}
                        >
                            {data.origin}
                        </button>
                    </label>
                    <label>
                        weight:
                        <button  
                            onClick={handleClick} value={data.weight}
                        >
                            {data.weight} lbs
                        </button>
                    </label>
                    <label>
                        affection level
                        <button 
                            onClick={handleClick}
                            value={data.affectionLevel}
                            >
                                {data.affectionLevel}
                        </button>
                    </label>
                    <label>
                        energy level
                        <button 
                            onClick={handleClick} value={data.energyLevel}
                        >
                            {data.energyLevel}
                        </button>
                    </label>
                </div>
                <img src={data.imgSrc}/>
        </div> 
    )
}