import React, {useState} from 'react'
import Card from '../../components/Card/Card';
import CardForm from '../../components/CardForm/CardForm';


import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import './Homepage.css';
import CreationMenu from '../../components/CreationMenu/CreationMenu';

function Homepage() {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
        console.log("alg coisa")
    }
    
    return (
        <div>
            <CreationMenu />
            <button onClick={handleClick} hidden={showMenu ? true : false}><AiOutlineMenuUnfold/></button>
            <CardForm />
            <Card />
        </div>
    )
}

export default Homepage;
