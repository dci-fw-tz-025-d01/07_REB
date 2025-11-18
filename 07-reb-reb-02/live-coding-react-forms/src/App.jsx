// import React from 'react'
// import {useState} from "react"

import React, {useState} from "react";
import UserCreate from "./UserCreate";

// rfce für aktuelle neue leere Komponente
// Ein TAG bedeutet nur, dass wir etwas öffnen und etwas schließen, das ist bei HTML <> </>

// Neues Thema: Hooks
// Vorstellung: Wir müssen eine bestimmte Logik jedesmal auführen, wenn sich etwas updated und wir müssen dies auch zuweisen, z.B. Aufgabe mit Zahl verdoppeln, bis die Zahl 2000 ist
// Wichtig: React und alle Variablen/Darstellung sollen als SPA dargestellt werden. Mit normalen DOM wird kein Re-Rendering(Neu Laden einer Komponte) angestoßen!
// In React können wir dieses Re-Rendering mit vordefinierten Hooks steuern!
// Merke: Jeder Hook in React ist eine vordefinierte Methode, hat eine eigene Sytax und verwendet ein eigenes Re-Rendering! (zu erkennen immer mir "use")
// useState: Vordefinierte Methode von "useState", Syntax unterteilt sich in [getter,Setter] = DefaultDataStructure, Re-Rendering wird beim verändern des getter angestoßen
// 1. Methode (Hook Use Name importieren über Named Import)
// 2. [Getter, Setter] = DefaultDataStructure
// const [userName, setUserName] = useState(DefaultDataStructure)
// 3. Ein Re-Rendering der Komponten passiert, sobald sich der Getter ändernt!
// 4. Ich ändere die Getter mit der Setter Funktion!!!
// Merke: Wir können auf alle DOM Events im React zugreifen! (click, submit, change)
// Merke: eine handleFunktion kümmert sich um das bestimmte Behandeln von Abläufen

function App() { // ES5 oder ES6

  const [userName, setUserName] = useState("Florian");
  const [userName2, setUserName2] = useState(["Florian"]);
  const [userName3, setUserName3] = useState({userName: "Florian"});
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeUserName = () =>{
    // Aufruf von meiner Setter Funktion und gegebenfalls weiteren Validierungen/ifs, Datenabrufen
    setUserName("Dienstag"); // Überschreibt den aktuellen Wert von userName
  }

  const handleChangeUserNameWithoutUseState = () =>{ // Der Aufruf der Funktion funktioniert
    userName = "Dienstag"; // Das zuweisen vom neuen String mit Vanilla JS funktioniert ebenfalls
    // ABER, WIR SEHEN KEIN UPDATE AUF DER WEBSEITE, WEIL KEIN RE-RENDERING STATTFINDET
  }

  return ( // JSX JavaScript and XML = Bindung von HTML, CSS, JS
    // Ein ElternElement im JSX
    <div className="app"> 
      {/* {JS Variable} */}
      {userName}
      {/* Wenn der Button geklickt wird, rufe die setUserName Setter Funktion auf! */}
      {/* <button onClick={setUserName()}>Ändere den Namen vom String auf Dienstag</button> */}
      <button onClick={handleChangeUserName}>Ändere den Namen vom String auf Dienstag</button>
      <button onClick={handleChangeUserNameWithoutUseState}>Ändere den Namen OHNE useState vom String auf Dienstag</button>
      {userName2.map((name,id)=><span key={id}>{name}</span>)}
      {userName3.userName}
      {/* // Komponenten Aufruf mit dem Tag Elementen für öffnen/schließen */}
     <UserCreate/>
    </div>
  )
}

export default App // export default