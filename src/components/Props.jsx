import React from 'react'

const Props = ({items}) => {

    const evenNumbers = items.filter((num) => num % 2 === 0);
    const square = evenNumbers.map((num) => num * num);

    return(
        <div>
            <h1>Props</h1>
            {square.map((num) => (
                <div>{num}</div>
            ))}
        </div>
    );
}
export default Props;