import React, {useState} from 'react'

import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import './CreationMenu.css';

function CreationMenu() {
    const hideMenu = () => {
        console.log("Menu escondido")
    }
    
    return (
        <div className="menu-container">
            <button><IoCreateOutline /> Adicionar cantor</button>
            <button onClick={hideMenu}><AiOutlineMenuFold /></button>
            <button><IoCreateOutline /> Adicionat album</button>
            <button><IoCreateOutline />Adicinoar serviço de streaming</button>
        </div>
    )
}

export default CreationMenu;
