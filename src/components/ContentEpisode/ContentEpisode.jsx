import React, { useState } from "react";
import { episodesUrl } from '../../utils/utils.js'
import Episode from '../Episode/Episode.jsx'

function ContentCharacters (){

    const [episodes , setEpisodes] = useState([])

    useState(()=>{
        fetch(episodesUrl)
        .then(res=>res.json())
        .then(data=>setEpisodes(data.results))
    },[])


    return(
        <>
            {
                episodes.length  ? episodes.map(episode=><Episode data={episode}/>)
                : <h2>NO HAY ARARY</h2>
                 
            }

        </>
    )
}

export default ContentCharacters;