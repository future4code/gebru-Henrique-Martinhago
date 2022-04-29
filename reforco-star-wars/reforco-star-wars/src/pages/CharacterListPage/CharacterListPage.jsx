import React, { useState } from "react";
import axios from "axios";
import { BASE_URL} from "../../constants/urls.js"

function CharacterListPage () {
    const [characterList, setCharacterList] = useState([])

    function getCharacterList(){
        axios.get(`${BASE_URL}/people/`)
        .then((response) => setCharacterList(response.data.results))
        .catch((error) => console.log("Erro:", error.message))
    }

    function showCharacters() {
        return characterList.map((character, index) =>{
            return <p key={index}>{character.name}</p>
        })
    }

    return <div>
       <h1> Lista de Personagem </h1>
       {showCharacters()}
    </div>
   
}

export default CharacterListPage