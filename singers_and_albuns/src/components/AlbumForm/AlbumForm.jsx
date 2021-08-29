import React, {useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

import '../CardForm/CardForm.css';

function AlbumForm({onCloseAlbum}) {
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

    const closeForm = () => {
        console.log("form fechado")
    }
    
    return (
        <div className="card-form-container">
            <button className="close-button" onClick={onCloseAlbum}><AiOutlineCloseCircle size={400}/></button>
            <form >
                <input
                    className="form-input" type="text" onChange={(e) => {setName(e.target.value)}} 
                    placeholder="Album name"/>
                <input 
                    className="form-input" type="text" onChange={(e) => {setDescription(e.target.value)}} 
                    placeholder="Album description"/>
                <button className="submit-button form-input" onClick={handleSubmit}>Add Album</button>
            </form>
        </div>
    )
}

export default AlbumForm
