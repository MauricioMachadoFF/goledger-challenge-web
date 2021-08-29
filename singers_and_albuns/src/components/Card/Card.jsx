import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import './Card.css';

function Card() {
    return (
        <div className="card-container">
            <h1 className= "card-title card-row">Name of Artist Here</h1>
            <p className="card-text card-row">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde vitae, explicabo repudiandae at voluptate sequi?</p>
            <div >
                <button className="card-button card-row opt1"><AiOutlineEdit /></button>
                <button className="card-button card-row opt2"><AiOutlineDelete /></button>
            </div>
            
            
        </div>
    )
}

export default Card;
