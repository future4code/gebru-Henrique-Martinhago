import React, { useState } from "react";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

function App() {
  const [ page , setPage] = useState("List")

  function selectPage() {
    if ( page === "list"){
      return <CharacterDetailsPage/>
    } else {
      return <CharacterListPage/>
    }
  }
  return (
    <div className="App" >
      { selectPage}
      
    </div>
  );
}

export default App;
