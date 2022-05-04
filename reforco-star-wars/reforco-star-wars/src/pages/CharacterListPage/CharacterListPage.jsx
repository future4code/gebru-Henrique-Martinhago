import React, { useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL} from "../../constants/urls.js"
import { CharacterCard } from "./Styled.js";


function CharacterListPage (props) {
    const [characterList, setCharacterList] = useState([])

    function getCharacterList(){
        axios.get(`${BASE_URL}/people/`)
        .then((response) => setCharacterList(response.data.results))
        .catch((error) => console.log("Erro:", error.message))
    }

    useEffect(() => {
        getCharacterList()
    }, [] )

    

    function showCharacters() {
        return characterList.map((character, index) =>{
            return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterCard>
        })
    }

    return (

<div>
       <h1> Lista de Personagem </h1>
       {showCharacters()}
    </div>
    ) 
    
   
}

export default CharacterListPage