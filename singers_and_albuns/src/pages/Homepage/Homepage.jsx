import React, {useState, useEffect} from 'react'
import CardForm from '../../components/CardForm/CardForm';
import Card from '../../components/Card/Card';

import {getStreamings} from "../../services/streaming";
import {getArtists} from "../../services/artist";
import {getAlbums} from "../../services/album";
import { AiOutlineMenuUnfold} from "react-icons/ai";
import './Homepage.css';
import CreationMenu from '../../components/CreationMenu/CreationMenu';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import StreamingCard from '../../components/StreamingCard/StreamingCard';
import AlbumForm from '../../components/AlbumForm/AlbumForm';
import StreamingForm from '../../components/StreamingForm/StreamingForm';

function Homepage() {
    const [res, setRes] = useState([{}]);
    const [resArt, setRestArt] = useState([{}]);
    const [resStr, setResStr] = useState([{}]);
    const [showMenu, setShowMenu] = useState(false);
    const [showform, setShowForm] = useState(false);
    const [showAlbumForm, setShowAlbumForm] = useState(false);
    const [showStreamingForm, setShowStreamingForm] = useState(false);
    
    useEffect( async () => {
        const response = await getAlbums();
        const responseArt = await getArtists();
        const responseStr = await getStreamings();
        setResStr(responseStr);
        setRestArt(responseArt);
        setRes(response);
    }, []);

    const handleClick = () => {
        setShowMenu(!showMenu)
        console.log("alg coisa")
    }

    return (
        <div>
            {showform ? <CardForm onClose={() => setShowForm(false)}/>: null}
            {showAlbumForm ? <AlbumForm onCloseAlbum={() => setShowAlbumForm(false)}/>: null}
            {showStreamingForm ? <StreamingForm onCloseStreaming={() => setShowStreamingForm(false)}/>: null}
            {showMenu ? <CreationMenu 
                setShowMenu={setShowMenu} 
                setShowForm={setShowForm} 
                setShowStreamingForm={setShowStreamingForm}
                setShowAlbumForm={setShowAlbumForm}/> : null}
            <button className="show-menu" onClick={handleClick} hidden={showMenu ? true : false}><AiOutlineMenuUnfold/></button>
            <div className="artist-list">
                <h1>Artists</h1>
                {resArt.map((artist) => 
                    <Card name={artist.name} description={artist.description} location={artist.location} />
                )}
            </div>
            <div className="album-list">
                <h1>Albums</h1>
                {res.map((album) => 
                    <AlbumCard 
                        albumName={album.name} 
                        genre={album.genre}
                        strOpt={JSON.stringify(album.strOptions)}
                        year={JSON.stringify(album.year)}
                        nTracks={album.nTracks}
                        explicit={album.explicit}
                        artist={JSON.stringify(album.artist)}/>
                )}
            </div>
            <div className="streaming-list">
                <h1>Streamings</h1>
                {resStr.map((streaming) => 
                    <StreamingCard strName={streaming.name}/>
                )}
            </div>
        </div>
    )
}

export default Homepage;
