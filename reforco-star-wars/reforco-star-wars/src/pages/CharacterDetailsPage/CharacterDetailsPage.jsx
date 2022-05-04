import React from "react";


function CharacterDetailsPage (props){
    return ( 
<div>
        <h1> Detalhes de Personagem</h1>
        <p>{ props.url}</p> 
        <button onClick={props.goToListPage}> voltar para lista de personagens</button>
        </div>
    ) 
}

export default CharacterDetailsPage