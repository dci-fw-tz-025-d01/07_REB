import React,{useState, useEffect} from 'react'
// 2. Jede Komponente hat ihre eigene CSS Datei
import "./Montag.css";
import Header from "./components/Header.jsx";
import Details from "./components/Details.jsx";
import Footer from "./components/Footer.jsx";

function Montag() {

  const [darkMode, setDarkMode] = useState(false);
  const [einkaufsliste, setEinkaufsliste] = useState(["Milch", "Brot", "Eier"]);
  // Array Zuweisung von Higher Order Functions => Function, welche einen Callback initialisiert
  const [currentUser, setCurrentUser] = useState({firstName:"Florian", lastName: "Hahn"});
  // Objekt Zuweisung von Punktnotation
  const [allUsers, setAllUsers] = useState([{firstName:"Florian", lastName: "Hahn"},{firstName:"Max", lastName: "Mustermann"},{firstName:"Abc", lastName: "xyz"}])

  useEffect(()=>{
    // Alles was hier steht wird einmalig ausgeführt oder dann wenn ich es im Dependency Array angebe oder diesen Dependency Array leer lasse.
    // 1. Ohne Dependency Array = einmalig beim ersten rendern der Komponente
    // 2. Leerer Dependency Array = einmalig beim re-render der Komponente
    // 3. Dependency Array mit Variable = immwe wenn sich die Variable ändert
    // const fetchApi = async() =>{
    //   const data = await fetch("allUsers.json");
    //   const response = data.json();
    //   setAllUsers(response);
    // };    
    // fetchApi();
  }, []);

  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

  }, [darkMode]); // Variable im Dependecy Array

  return (
    // Wechseln von JSX HTML zu CSS über das className Attribut
    <div className="app">
      {/* <p className="montag-text">Heute ist Montag</p> */}
      {/* Props (Parameter) Übergabe an von Parent zu Child und die Annahme im Child und anschließend der Aufruf davon im Child */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Details einkaufsliste={einkaufsliste}/>
      <Footer currentUser={currentUser} allUsers={allUsers}/>
    </div>
  )
}

export default Montag
