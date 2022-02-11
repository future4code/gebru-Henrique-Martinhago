
import Etapa1, { components } from "./components/Etapa1";
import "./App.css";
import React from 'react';

class App extends React.Component {
  state={
    etapa: 1,
  }
  render(){
    return (
      <div>
        <Etapa1

         titulo1={"  Passo 1 - DADOS GERAIS" }
         nome={" Qual seu nome? " }
         idade={" Qual sua idade? "}
         email ={" Qual seu email? "}
         escolaridade= {" Qual sua escolaridade?"} opçoes={[
           "Ensino medio incompleto",
           "Ensino medio completo",
           "Ensino superior incompleto",
           "Ensino superior completo"
         ]}
         botao={" avançar "} 
        />

        <Etapa2 
        titulo2 = {"INFORMAÇOES GERAIS"}
        curso = {"Qual curso?"}
        instituicao = {"Qual instituiçao de ensino?"}
        />
        
        <Etapa3 
        titulo3 = {"INFORMAÇOES GERAIS DE ENSINO"}
        cursoNaoConcluido = {"Porque você não concluiu um curso de graduação?"}
        cursoComplementar = {"você fez algum curso complementar?"} opçao ={[
          "Nenhum",
          "Curso tecnico",
          "Curso de ingles"
        ]}
        />

        <Etapafinal 
        tituloFinal = {"O FORMULARIO ACABOU"}
        FraseAgradecimento = {"Muito obrigado por participar! Entraremos em contato!"}
        
        />    

      </div>
    );
   }
  }
  


export default App;
