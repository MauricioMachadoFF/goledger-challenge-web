import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import './AlbumCard.css';
import '../Card/Card.css';

function AlbumCard({genre, albumName, strOpt, year, artist}) {
    return (
        <div className="card-container">
            <h1 className= "card-title card-row">{albumName}</h1>
            <p className="card-text card-row">{artist}</p>
            <p className="card-text card-row">{year}</p>
            <p className="card-text card-row">{genre}</p>
            <p className="card-text card-row">{strOpt}</p>
            <div >
                <button className="card-button card-row opt1"><AiOutlineEdit /></button>
                <button className="card-button card-row opt2"><AiOutlineDelete /></button>
            </div>
            
            
        </div>
    )
}

export default AlbumCard;
