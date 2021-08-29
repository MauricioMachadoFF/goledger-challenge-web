import React, {useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

import './CardForm.css';

function CardForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const data = {
        "name": name,
        "description": description
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!name || !description) {
            console.log("preencha todos os dados")
        }
        else{
            console.log("por hoje e so pessoal")
            console.log(data)   
        }
    }
    
    return (
        <div className="card-form-pos">
            <div className="card-form-container">
                <button className="close-button"><AiOutlineCloseCircle size={400}/></button>
                <form >
                    <input
                        className="form-input" type="text" onChange={(e) => {setName(e.target.value)}} 
                        placeholder="Artist name"/>
                    <input 
                        className="form-input" type="text" onChange={(e) => {setDescription(e.target.value)}} 
                        placeholder="Artist description"/>
                    <button className="submit-button form-input" onClick={handleSubmit}>Add Artist</button>
                </form>
            </div>
        </div>
    )
}

export default CardForm
