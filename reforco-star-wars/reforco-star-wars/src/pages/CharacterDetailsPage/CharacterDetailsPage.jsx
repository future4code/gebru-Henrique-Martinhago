import {getCharacterDetails, getPlanetDetails } from "../../services/request"
import React, {useState, useEffect} from "react";


function CharacterDetailsPage (props){
    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect (() => {
        getPlanetDetails (details.homeworld, setPlanet)
    }, [details.homeworld] )

    
    return (
    <div>
        <container2>
        <h1>Detalhes de Personagem </h1>

         <div> 

        <p> Nome: { details.name}</p>
        <p> Planeta de origem: {planet.name} </p> 
        <button onClick={props.goToListPage}> voltar para lista de personagens</button>
        </div>

        </container2>
       
        
    </div>
    ) 
}

export default CharacterDetailsPage