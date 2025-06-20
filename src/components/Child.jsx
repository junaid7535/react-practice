import React from "react";
import './Child.css';

const Child = ({setName}) => {

    const handle = () => {
        setName("Junaid");
    }

    return (
        
        <button className="btn" onClick={handle}> SetName </button>
    );
}

export default Child;