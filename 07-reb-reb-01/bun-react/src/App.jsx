import Header from "Header.jsx";

function App() {
  // Wir können Daten/Funktionen/Variablen von ELTERN Komponenten zu KIND Komponenten weitergeben
  // Props: Ein Key:value Pair in der Elternkomponente angegeben wird und in der Kind Komponente dieser Key angenommen wird.
  const pi = 3.14;

  return (
    <div>
      <Header abc={pi} />
      <Header cssLike="CSS"/>
      {/* Wir geben den key={variable} Pair in der App Komponente an */}
      {/* Aufruf der Kind Komponente Header nach dem import */}
    </div>
  )
}

export default App
