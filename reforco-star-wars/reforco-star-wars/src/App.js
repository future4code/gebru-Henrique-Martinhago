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
    if ( page === "list"){
      return <CharacterDetailsPage goToDetailsPage={goToDetailsPage}/>
    } else {
      return <CharacterListPage goToListPage={goToListPage} url={detailsUrl}/>
    }
  }
  return (
    <div className="App" >
      { selectPage ()}
      
    </div>
  );
}

export default App;
