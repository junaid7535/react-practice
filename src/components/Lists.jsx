import React from "react";

const Lists = ({items}) => {

    const squares = items.map((num) => num * num);

    return( 
        <div>
            <h1>React Lists</h1>

            <ul>
                {squares.map((num,index) => (
                <li key={index}> {num} </li>
                ))}
            </ul>
        </div>

        
    );
}

export default Lists;