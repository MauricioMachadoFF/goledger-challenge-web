import React, {useState} from 'react'
import CardForm from '../../components/CardForm/CardForm';


import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import './Homepage.css';
import CreationMenu from '../../components/CreationMenu/CreationMenu';

function Homepage() {

    const [showMenu, setShowMenu] = useState(false);
    const [showform, setShowForm] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
        console.log("alg coisa")
    }
    
    return (
        <div>
            {showform ? <CardForm />: null}
            {showMenu ? <CreationMenu setShowMenu={setShowMenu} setShowForm={setShowForm}/> : null}
            <button className="show-menu" onClick={handleClick} hidden={showMenu ? true : false}><AiOutlineMenuUnfold/></button>
        </div>
    )
}

export default Homepage;
