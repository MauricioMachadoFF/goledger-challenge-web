import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { deleteStream } from '../../services/streaming'

import '../Card/Card.css';

function StreamingCard({strName, strKey}) {
    const deleteButton = async () => {
        console.log(strKey)
        await deleteStream(strKey)
        window.location.reload();  
    }
    
    return (
        <div className="card-container">
            <h1 className= "card-title card-row">{strName}</h1>
            <div >
                <button className="card-button card-row opt2" onClick={deleteButton}><AiOutlineDelete /></button>
            </div>
            
            
        </div>
    )
}

export default StreamingCard;
