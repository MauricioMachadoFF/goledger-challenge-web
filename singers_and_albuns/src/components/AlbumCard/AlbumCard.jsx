import React, {useEffect, useState} from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import './AlbumCard.css';
import '../Card/Card.css';

function AlbumCard({genre, albumName, strOpt, year, artist, nTracks, explicit}) {

    return (
        <div className="card-container">
            <h1 className= "card-title card-row">{albumName}</h1>
            <p className="card-text card-row">{artist}</p>
            <p className="card-text card-row">Ano de lançamento: {year}</p>
            <p className="card-text card-row">Gênero: {genre}</p>
            <p className="card-text card-row">Número de faixas: {nTracks}</p>
            <p className="card-text card-row">Possui conteúdo explícito: {explicit ? "Sim" : "Não"}</p>
            <p className="card-text card-row">{strOpt}</p>
            <div >
                <button className="card-button card-row opt1"><AiOutlineEdit /></button>
                <button className="card-button card-row opt2"><AiOutlineDelete /></button>
            </div>
            
            
        </div>
    )
}

export default AlbumCard;
