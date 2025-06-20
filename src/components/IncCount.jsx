import React from "react"
import './IncCount.css'

function IncCount({setName}){
    const [count,setcount] = React.useState(0);

    const handle = () => {
        setcount(count+1)
    }

    return(
        <div>
            <p className = "count"> count : {count} </p>

            <button className="btn" onClick={handle}> Increment </button>
            
            <div>

            </div>
        </div>
    );
}

export default IncCount;