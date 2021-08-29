import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import '../Card/Card.css';

function StreamingCard({strName}) {
    return (
        <div className="card-container">
            <h1 className= "card-title card-row">{strName}</h1>
            <div >
                <button className="card-button card-row opt1"><AiOutlineEdit /></button>
                <button className="card-button card-row opt2"><AiOutlineDelete /></button>
            </div>
            
            
        </div>
    )
}

export default StreamingCard;
