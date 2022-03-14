import React from "react";
import AddPlayList from "./components/AddPlayList";
import PlayListScreen from "./components/PlayListScreen";


class App extends React.Component{
  state = {
    renderedScreen: 'add'
  }

  chooseScreen = () => {
    switch ( this.state.renderedScreen) {
      case 'add':
        return <AddPlayList goToPlayListScreen={this.goToPlayListScreen}/>
      case 'playlist':
        return <PlayListScreen goToAddPlayList={this.goToAddPlayList}/>
    default:
      return <h2> opção nao encontrada</h2>
      }
  }

  goToAddPlayList = () => {
    this.setState({ renderedScreen: 'add'})
  }

  goToPlayListScreen = () => {
    this.setState({ renderedScreen: 'playList'})
  }

  render () {
    return (

      <div>
         <h1> Labefy - Top PlayList</h1>
         {this.chooseScreen ()}

      </div>
    )
  }
}

export default App
