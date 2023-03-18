export default function Banned({bannedList}){
    return (
        <div className="banned-list">
            <br></br>
            <h2>Banned List</h2>
            <br></br>

            { bannedList && 
                bannedList.map((item, index) => (
                   <p key={index}>{item}</p> 
                ))
            }
        </div>
    )
}