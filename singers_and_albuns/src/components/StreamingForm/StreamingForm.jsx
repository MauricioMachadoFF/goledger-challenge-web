import React, {useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { createStream } from '../../services/streaming';

import '../CardForm/CardForm.css';

function StreamingForm({onCloseStreaming}) {
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!name) {
            console.log("preencha todos os dados")
        }
        else{
            await createStream(name);
            onCloseStreaming(); 
            window.location.reload();
        }
    }
    
    return (
        <div className="card-form-container">
            <button className="close-button" onClick={onCloseStreaming}><AiOutlineCloseCircle size={400}/></button>
            <form >
                <input
                    className="form-input" type="text" onChange={(e) => {setName(e.target.value)}} 
                    placeholder="Name of the streaming platform"/>
                <button className="submit-button form-input" onClick={handleSubmit}>Add Album</button>
            </form>
        </div>
    )
}

export default StreamingForm
