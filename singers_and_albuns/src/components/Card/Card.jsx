import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import {deleteArtist} from '../../services/artist';

import './Card.css';

function Card({name, description, location, artKey}) {

    const deleteButton = async () => {
        await deleteArtist(artKey);
        window.location.reload(); 
    }

    return (
        <div className="card-container">
            <div>
                <h1 className= "card-title card-row">{name}</h1>
            </div>
            <div>
                <p className="card-text card-row">{location}</p>
                <p className="card-text card-row">{description}</p>
            </div>
            <div >
                <button className="card-button card-row opt2" onClick={deleteButton}><AiOutlineDelete /></button>
            </div>
            
            
        </div>
    )
}

export default Card;
