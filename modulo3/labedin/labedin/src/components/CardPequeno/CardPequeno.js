import React from "react";
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div className="LittleCard-container">
      
        <div>
            <h3>{ props.texto }</h3>
            <p>{ props.endereço }</p>
        </div>
    </div>
    )
}

export default CardPequeno;