import React, {Children, useState} from 'react'
import HorizontalScroll from "react-scroll-horizontal";
import CardForm from '../../components/CardForm/CardForm';
import Card from '../../components/Card/Card';


import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import './Homepage.css';
import CreationMenu from '../../components/CreationMenu/CreationMenu';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import StreamingCard from '../../components/StreamingCard/StreamingCard';
import AlbumForm from '../../components/AlbumForm/AlbumForm';
import StreamingForm from '../../components/StreamingForm/StreamingForm';

function Homepage() {

    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}

    const [showMenu, setShowMenu] = useState(false);
    const [showform, setShowForm] = useState(false);
    const [showAlbumForm, setShowAlbumForm] = useState(false);
    const [showStreamingForm, setShowStreamingForm] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
        console.log("alg coisa")
    }
    
    const artists = [
        {
            name: "name",
            description: "description",
            location: "location"
        },
        {
            name: "name",
            description: "description",
            location: "location"
        },
        {
            name: "name",
            description: "description",
            location: "location"
        },
        {
            name: "name",
            description: "description",
            location: "location"
        },
    ]

    const albuns = [
        {
            genre: "genre",
            artist: "artist",
            name: "carai",
            strOpt: "Spotify",
            year: "1980"
        },
        {
            genre: "genre",
            artist: "artist",
            name: "carai",
            strOpt: "Spotify",
            year: "1980"
        }

    ]

    const streamings = [
        {
            name: "name"
        },
        {
            name: "name"
        },
        {
            name: "name"
        }
    ]

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
                {artists.map((artist) => 
                    <Card name={artist.name} description={artist.description} location={artist.location} />
                )}
            </div>
            <div className="album-list">
                <h1>Albums</h1>
                {albuns.map((album) => 
                    <AlbumCard 
                        albumName={album.name} 
                        genre={album.genre}
                        strOpt={album.strOpt}
                        year={album.year}
                        artist={album.artist}/>
                )}
            </div>
            <div className="streaming-list">
                <h1>Streamings</h1>
                {streamings.map((streaming) => 
                    <StreamingCard strName={streaming.name}/>
                )}
            </div>
        </div>
    )
}

export default Homepage;
