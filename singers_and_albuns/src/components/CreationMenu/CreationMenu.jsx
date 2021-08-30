import React from 'react'

import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import './CreationMenu.css';

function CreationMenu({setShowMenu, setShowForm, setShowStreamingForm, setShowAlbumForm}) {

    return (
        <div className="menu-container">
            <div><button className="menu-option" onClick={() => setShowForm(true)}><IoCreateOutline /> Adicionar cantor</button></div>
            <div><button className="menu-option" onClick={() => setShowAlbumForm(true)}><IoCreateOutline /> Adicionar album</button></div>
            <div><button className="menu-option" onClick={() => setShowStreamingForm(true)}><IoCreateOutline />Adicionar serviço de streaming</button></div>
            <div><button className="hide-menu" onClick={() => setShowMenu(false)}><AiOutlineMenuFold /></button></div>
        </div>
    )
}

export default CreationMenu;
