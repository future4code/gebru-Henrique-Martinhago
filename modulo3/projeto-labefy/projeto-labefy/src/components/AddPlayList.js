import React from 'react';
import axios from 'axios';



class AddPlayList extends React.Component {
  state = {
    playListInput:"",
  }

  handlePlayListInput = (event) => {
    this.setState({playListInput:event.target.value})
 }

 creatPlayList = async() =>{
   const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
 
   const body = {
     playlist: this.state.playListInput
   }

   try {
      const res = await axios.post(url,body, {
        headers :{
       Authorization: 'henrique-martignago-gebru'
        }
       })

       alert(`PlayList ${this.state.playListInput} adicionado com sucesso`)
     this.setState({ playListInput :''})
    }catch (err){
     alert( err.response.data.message)
   }
  }
  
render() {
  return (
    <div>
       <h3>  Adicionar Playlist</h3>
       <div> 
         <input
          placeholder='Adicione Playlist' 
          value = { this.state.playListInput}
          onChange = {this.handlePlayListInput}
        />
        <button onClick={this.creatPlayList} > Adicionar</button>

       </div> 
        <button onClick={this.props.goToListPlayListScreen}> Ir para lista de Playlist</button>
    </div>
    )
  }
}
 

export default AddPlayList;