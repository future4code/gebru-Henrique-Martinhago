import React from 'react';

export default class Etapa1 extends react.component {
 
    onClickbotao = () => {

 }
 
    render () {
     return (
        <>
            <h1> this.props.titulo1 </h1>
           
            <h3> this.props.nome </h3>
            <input></input>

            <h3> {this.props.idade} </h3>
            <input></input>

            <h3> {this.props.email} </h3>
            <input></input>

            <h3> { this.props.escolaridade}</h3>
            <input></input>

            <button>{this.props.botao } </button>
           
        </>
      );
 }
   
}


