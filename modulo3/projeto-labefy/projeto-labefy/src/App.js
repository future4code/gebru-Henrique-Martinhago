import axios from 'axios';
import React from 'react';



class App extends React.Component {
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

       alert('')
   }
  }
  

  render(){
return (
<div>
  <h3>  Tela para Adicionar Playlist</h3>
 <input
 placeholder='Adicione Playlist' ></input>


</div>
);
  }
}
 

export default App;
