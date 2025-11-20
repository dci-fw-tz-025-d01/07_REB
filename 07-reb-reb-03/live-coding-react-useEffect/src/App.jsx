// import React from 'react'
import {useState, useEffect} from "react";
import UserList from './UserList';

function App() {
  // const [showUserList, setShowUserList] = React.useState(false);
  const [showPostDetails, setShowPostDetails] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  // Wichtig: Wir wollen Komponenten (Funktionen) wiederverwendbar, so klein wie möglich und dynamisch schreiben!!!!!!

  // Fetch und HTTP Wiederholung:
  // Merke: Wir benutzen im MERN/DCI Stack immer eine REST API mit JSON Daten
  // HTTP(1.1) Methoden:
  // CRUD Methoden (CREATE; READ; UPDATE; DELETE) => Allen 4 Bereichen wissen, was wir in welcher Situation im Frontend/API/Backend/DB dafür brauchen
  // GET (READ), POST (CREATE), PUT/PATCH(UPDATE), DELETE(DELETE)
  // HTTP Endpunkte/Parameter beim Aufruf:
  // /api/warenkorb/4711/florian => Pfad Parameter
  // /api/warenkorb?id=4711&firstName=florian => Query Parameter
  // /api/warenkorb - req.body.id {"id":4711, "firstName":"florian"} => Body Parameter
  // Wo bekommen wir die Daten in der Antwort?
  // HTTP Body!
  // Beispiel: HTTPClient React Aufruf der API mit dem Fetch Promise über eine GET URI mit Pfad Parameter /posts
  // Merke: Standard fetch() führt eine GET HTTP Anfrage aus!
  // fetch("https://jsonplaceholder.typicode.com/posts")

  // const loadData = async () =>{
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   console.log(response)
  //   const data = await ((response)=>console.log(response));
  //   return data; // Wir geben data zurück an den Aufruf der Funktion
  // };
  // loadData();
  // Problem: Wir können nicht aus den 2 Status des React Render Lifecylce zugreifen!

  // Lösung: Hook useEffect!
  // Reine Funktion: Eine Funktion, die keine Nebenwirkung hat und immer bei gleicher Eingabe das gleiche Ergebnis liefert, z.B. Zahlen: 1+1 =2
  // Nebenwirkungsfunktion: Eine Funktion ist, welche Nebenwirkungen hat, verändern die Variablen und die Rückgaben. z.B. Datei schreiben (PDF)
  // useEffect: 1. Methode importieren (useEffect), 2. Syntax: Callback Funktion mit 3 Zuständen: 
  // 1. Das einmalige laden von Code
  // 2. Der Dependency Array eine Variable enthält und jedes mal wenn diese Variable sich ändert, wird der gesamte useEffect Code ausgeführt
  // 3. Der Dependency Array leer ist

  // 1. Callback useEffect für das einmalige laden von Code
  useEffect(()=>{
    console.log("Das wird einmal angezeigt!")
  });

  useEffect(()=>{ // 2. Wenn sich die Variable im Dependency Array ändert, wird der useEffect Code ausgeführt
    console.log("Das wird angezeigt, wenn sich showUserList ändert!")
  },[showPostDetails]) // ,[] => Mein Dependency Array mit der Variable showUserList

  useEffect(()=>{ // 3. Wenn der Dependency Array leer ist.
    console.log("Das wird angezeigt, wenn das Mounting der Komponente lädt.")
  }, []) // ,[] => Mein leerer Dependency Array


  useEffect(()=>{
        const fetchPostData = async()=>{
            const data = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await data.json();
            setAllPosts(json);
        }
        fetchPostData();
    },[]);
  // React Renderlife Cycle:
  // Bestimmt, wann eine Komponente neu geladen wird und in welcher Reihenfolge
  // Wichtig: Wir möchten mit der richtigen Reihenfolge das falsche Darstellen oder fehlerhaften undefined/null verhindern.
  // Das können wir beeinflussen, indem wir z.B. richtige useState verwenden
  // Merke: mit dem useEffect Hook können wir diese Reihenfolge DIREKT beeinflussen
  // Merke: 3 Phasen von dem Renderlife Cyle:
  // 1. Phase Mounting: Das erste mal, wenn die Komponentenfunktion aufgerufen wird
  // 2. Phase Updating: Ausgeführt, wenn eine Komponentenfunktion vom React ausgelöst wird
  // 3. Phase Unmounting: Eine Komponentenfunktion von einer Seite/extern entfernt wird
  return (
    <div className="app">
      {showPostDetails ?
      <div>
         {allPosts.map((post,id)=>(
                <div key={id}>
                    Post Information: {post.id} : {post.title}
                </div>
            ))}
      </div>
        // <UserList userList={userList}/>
      :
      <div>
        <span>Wird geladen</span>
         <button onClick={(setShowPostDetails)=>setShowPostDetails(true)}>Jetzt Daten laden</button>
      </div>
      }
    </div>
  )
}

export default App