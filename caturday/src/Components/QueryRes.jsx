export default function QueryRes({data}){
    console.log(data);
    return (
        <div className="queryRes">
               <h2>{data.name}</h2>
                <div className="attributes">
                    <label>
                        origin: 
                        <button>{data.origin}</button>
                    </label>
                    <label>
                        weight:
                        <button>{data.weight} lbs</button>
                    </label>
                    <label>
                        affection level
                        <button>{data.affectionLevel}</button>
                    </label>
                    <label>
                        energy level
                        <button>{data.energyLevel}</button>
                    </label>
                </div>
                <img src={data.imgSrc}/>
        </div> 
    )
}