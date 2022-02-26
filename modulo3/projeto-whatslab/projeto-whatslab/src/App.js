
import './App.css';
import react from 'react';
import { render } from '@testing-library/react';
import styled from 'styled-components';

const historico = styled.div`
display: flex;
border: 1px solid green;
margin: 8px auto;
padding: 0 8px;
`
class App extends react.Component {
  state = {
    historicoState: [
      {id:" " , Remetente:" " , Mensagem: "" },
    ],
    inputRemetente:" ",
    inputMensagem: " ",
  }
}

guardaRemetente = (event) => {
  this.setState({ inputRemetente:event.target.value })
}
guardaMensagem = (event) => {
  this.setState({ inputMensagem:event.target.value })
}

addMensagem = () => {
  newMensagem = {
    id:Math.random(),
    remetente:this.state.inputRemetente,
    mensagem: this.state.inputMensagem
  }

const addNewMensagem = [...this.state.historicoState, newMensagem]
addNewMensagem.push(newMensagem) 
this.setState({historicoState:addNewMensagem})
this.setState({inputRemetente: ' ' , inputMensagem: ' ' })
}

render() {
  const whatslab = this.state.historicoState.map((historico) => {
  return ( 
   <div key={historico.id}>
     <h2> Conversas </h2>

    <input 
   placeholder={'Remetente'}
   value={this.state.inputRemetente}   
   onChange={this.guardaRemetente}
   />

    <input
   placeholder={'Mensagem'}
   value={this.state.inputMensagem}
   onChange={this.guardaMensagem} 
   />

    <button onClick={this.addMensagem}> Enviar </button>
    {whatslab}

   </div>
    )
  }
 )
}
   

export default App;
