import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import './Card.css';

function Card() {
    return (
        <div className="card-container">
            <h1 className= "card-artist-name card-row">Name of Artist Here</h1>
            <p className="card-desc card-row">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde vitae, explicabo repudiandae at voluptate sequi?</p>
            <button className="card-button card-row"><AiOutlineEdit /></button>
            <button className="card-button card-row"><AiOutlineDelete /></button>
        </div>
    )
}

export default Card;
