import axios from "axios";
import React, {useState, useEffect} from "react";


function CharacterDetailsPage (props){
    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails()
    }, [props.url])

    useEffect (() => {
        getPlanetDetails ()
    }, [details.homeworld] )

    function getCharacterDetails() {
        axios.get(props.url)
        .then((response) => {
            console.log(response.data)
            setDetails(response.data)
        }) 
        .catch((error) => console.log(error.message))
    }

    function getPlanetDetails() {
        axios.get(details.homeworld) 
        .then((response) => {
            console.log(response.data)
            setPlanet(response.data)
        }) 
        .catch((error) => console.log(error.message))
    }

    return ( 
<div>
        <h1> Detalhes de Personagem</h1>
        <p> Nome: { details.name}</p>
        <p> Planeta de origem: {planet.name} </p> 
        <button onClick={props.goToListPage}> voltar para lista de personagens</button>
        </div>
    ) 
}

export default CharacterDetailsPage