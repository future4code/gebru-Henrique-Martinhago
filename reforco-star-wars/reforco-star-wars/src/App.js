import React, { useState } from "react";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

function App() {
  const [ page , setPage] = useState("List")
  const [detailsUrl, setDetailsUrl] = useState("")

  function goToDetailsPage(url) {
    setPage("details")
    setDetailsUrl(url)
  }

  function goToListPage() {
    setPage("List")
  }
  
  function selectPage() {
    if ( page === "List"){
      return <CharacterListPage goToDetailsPage={goToDetailsPage } url={detailsUrl}/>
    } else {
      return <CharacterDetailsPage  goToListPage={goToListPage}/>
    }
  }
  return (
    <div className="App" >
      { selectPage ()}
      
    </div>
  );
}

export default App;
