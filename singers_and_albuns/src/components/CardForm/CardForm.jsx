import React, {useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { createArtist } from '../../services/artist';

import './CardForm.css';

function CardForm({onClose}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')

    const data = {
        "name": name,
        "description": description,
        "location": location,
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!name || !description || !location) {
            console.log("preencha todos os dados")
        }
        else{
            await createArtist(data);
            onClose(); 
            window.location.reload();  
        }
    }
    
    return (
        <div className="card-form-container">
            <button className="close-button" onClick={onClose}><AiOutlineCloseCircle size={400}/></button>
            <form >
                <input
                    className="form-input" type="text" onChange={(e) => {setName(e.target.value)}} 
                    placeholder="Artist name"/>
                <input 
                    className="form-input" type="text" onChange={(e) => {setLocation(e.target.value)}} 
                    placeholder="Country of origin"/>
                <input 
                    className="form-input" type="text" onChange={(e) => {setDescription(e.target.value)}} 
                    placeholder="Artist description"/>
                <button className="submit-button form-input" onClick={handleSubmit}>Add Artist</button>
            </form>
        </div>
    )
}

export default CardForm
