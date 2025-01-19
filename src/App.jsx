import { useState } from "react";
import Startgame from "./components/Startgame";
import GamePlay from "./components/GamePlay";

function App() {
 
 const [isgamestarted,setisgamestarted]=useState(true);
  
 const toggleplay=()=>{
  setisgamestarted((prev)=>!prev);
 }
  return (
    <>
      {isgamestarted ? <GamePlay/>:<Startgame   toggle={toggleplay}/>
     
      }

   </>
  );
}

export default App;

