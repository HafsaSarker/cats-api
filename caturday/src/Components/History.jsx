export default function History({history}){
    return (
        <div className="history">
            <h2>Browsing History</h2>
            { 
                history &&  
                history.map((catHistory) => (
                //console.log(catHistory)
                (catHistory.name && catHistory.imgSrc) ?
                (       
                    <div key={catHistory.name} className="cat-history">
                        <p>{catHistory.name}</p>
                        <img src={catHistory.imgSrc}/>
                    </div> 
                ) : ("")
                
                ))
            }
      </div>
    )
}