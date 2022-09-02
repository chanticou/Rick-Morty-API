import React from "react";
import { charactersUrl } from '../../utils/utils';
import { useEffect , useState } from 'react';
import Character from "../Character/Character";
import './ContentCharacters.css'

function ContentCharacters(){
    const [characters , setCharacters] = useState([])

    useEffect(()=>{
        fetch(charactersUrl)
        .then(res=>res.json())
        .then(data=>setCharacters(data.results))
    },[])



    return(
        <>
        <div className="content-characters">
            {
                characters.length ? characters.map(character=><Character  data={character}/>)
                : <h1>ERROR NO HAY NADA QUE MOSTRAR</h1>
            }
        </div>
        </>
    )
}

export default ContentCharacters;