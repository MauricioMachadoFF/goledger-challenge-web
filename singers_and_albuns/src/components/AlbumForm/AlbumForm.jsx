import React, {useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import {createAlbum} from '../../services/album';

import '../CardForm/CardForm.css';
import './AlbumForm.css';

function AlbumForm({onCloseAlbum, responseArt, responseStr}) {
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [nTracks, setNTracks] = useState('')
    const [explicit, setExplicit] = useState('');
    const [year, setYear] = useState('');
    const [artistKey, setArtistKey] = useState('');
    const [responseKey, setResponseKey] = useState('');

    const data = {
        "name": name,
        "genre": genre,
        "nTracks": nTracks,
        "explicit": explicit,
        "year": year,
        "artistKey": artistKey,
        "responseKey": responseKey
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!name || !genre || !nTracks || !explicit || !year || !artistKey || !responseKey) {
            console.log("Preencha todos os dados");
        }
        else {
            await createAlbum(data);
            onCloseAlbum(); 
            window.location.reload();  
        }
    }
    
    return (
        <div className="card-form-container">
            <button className="close-button" onClick={onCloseAlbum}><AiOutlineCloseCircle size={400}/></button>
            <form className="forms-album-form">
                <input
                    className="form-input" type="text" onChange={(e) => {setName(e.target.value)}} 
                    placeholder="Album's name"/>
                <input 
                    className="form-input" type="text" onChange={(e) => {setGenre(e.target.value)}} 
                    placeholder="Album's genre"/>
                <input 
                    className="form-input" type="text" onChange={(e) => {setNTracks(e.target.value)}} 
                    placeholder="Number of tracks"/>
                
                <input 
                    className="form-input" type="text" onChange={(e) => {setYear(e.target.value)}} 
                    placeholder="Launch Year"/>
                <p className="explicit-content">Explicit Content:</p>
                <div className="explicit-container">
                    <input 
                        className="explicit-content" id="true" value={true} type="radio" name="explicit" onClick={(e) => {setExplicit(e.target.value)}}/>
                    <label for="true">Yes</label>
                    <input 
                        className="explicit-content" id="false" value={false} type="radio" name="explicit" onClick={(e) => {setExplicit(e.target.value)}}/>
                    <label for="false">No</label>
                </div>
                <div>
                    <select className="form-input" onChange={e => setArtistKey(e.target.value)}>
                        {responseArt.map((artist) => 
                            <option value={artist["@key"]}>{artist.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <select className="form-input" onChange={e => setResponseKey(e.target.value)}>
                        {responseStr.map((artist) => 
                            <option value={artist["@key"]}>{artist.name}</option>
                        )}
                    </select>
                </div>
                <button className="submit-button form-input" onClick={handleSubmit}>Add Album</button>
            </form>
        </div>
    )
}

export default AlbumForm
