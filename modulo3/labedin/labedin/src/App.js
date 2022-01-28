import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FOTO from './FOTO/foto-perfil.jpeg';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ FOTO } 
          nome="Henrique Martignago Martinhago" 
          descricao="Olá eu sou estudante de desenvolvimento web no curso Full Stack da Labenu,ansioso para trabalhar e por em pratica o que aprendi, creescer mais ajudando 
          quem estiver a minha volta e a empresa"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Tenho facilidade de trabalhar em equipe, me comunicar em publico 
          e Ja trabalhei na area administrativa de empresas, SAC e atendimento ao cliente. Fiz curso de 
          marketing pessoal, oratoria , ingles ( basico) e espanhol (intermediario) " 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
          <CardPequeno 
            texto="rick_martignago@hotmail.com" 
            endereço=" Rua Dona Maria 217"
        /> 
      </div>

    </div>
  );
}

export default App;
