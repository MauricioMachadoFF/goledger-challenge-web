import React, {useState} from 'react'

import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import CardForm from '../CardForm/CardForm';
import './CreationMenu.css';

function CreationMenu({setShowMenu, setShowForm}) {
    const [createArtCard, setCreateArtCard] = useState(false);


    return (
        <div className="menu-container">
            <div><button className="menu-option" onClick={() => setShowForm(true)}><IoCreateOutline /> Adicionar cantor</button></div>
            <div><button className="menu-option"><IoCreateOutline /> Adicionat album</button></div>
            <div><button className="menu-option"><IoCreateOutline />Adicinoar serviço de streaming</button></div>
            <div><button className="hide-menu" onClick={() => setShowMenu(false)}><AiOutlineMenuFold /></button></div>
        </div>
    )
}

export default CreationMenu;
