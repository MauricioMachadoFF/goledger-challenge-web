import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import './Card.css';

function Card({name, description, location}) {
    return (
        <div className="card-container">
            <h1 className= "card-title card-row">{name}</h1>
            <p className="card-text card-row">{location}</p>
            <p className="card-text card-row">{description}</p>
            <div >
                <button className="card-button card-row opt1"><AiOutlineEdit /></button>
                <button className="card-button card-row opt2"><AiOutlineDelete /></button>
            </div>
            
            
        </div>
    )
}

export default Card;
