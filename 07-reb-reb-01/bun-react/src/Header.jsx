import React from 'react'

// Wir müssen die KEYS aus der Eltern APP Komponente hier in der Kind Komponente annehmen
// Annehmen: Wir geben als Destructuring die KEYS als Parameter an
function Header({abc}) {
  return (
    <div>
        <span>{abc}</span>
        Das ist meine Header Komponente
    </div>
  )
}

export default Header