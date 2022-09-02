import React from 'react'
import './Character.css'

//CADA UNO DE LOS PERSONAJES
// id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', type: ''

function Characters({ data }){
console.log(data.location.name)
    return(
        <>
            <div className='content-character'>
                <div>
                    <img className='image' src={data.image}></img>
                </div>

                <div className='content-data'>
                    <h1>{data.name}</h1>
                    <h3 className='location'>Last know location:</h3>
                    <p>{data.location.name}</p>
                    <p>species: {data.species}</p>
                    {/* <p>type: {data.type}</p> */}
                    <p>status: {data.status}</p>
                </div>

                {/* <Button className='handleClickButton' handleClick={handleEpisode} funcionality='WATCH' /> */}
            </div>
        </>
    )
}

export default Characters;