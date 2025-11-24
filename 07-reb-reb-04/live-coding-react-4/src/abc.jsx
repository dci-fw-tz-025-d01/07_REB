import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. Einbinden von einer Haupt CSS:
// Wir haben eine ganz große Haupt CSS Datei, welche am Anfang der React App geladen wird (meisten in bevor der App.jsx)
// 2. Entkapselte CSS pro Komponente, siehe App.css
import './index.css'
import Montag from './Montag.jsx'

// Ab hier wird React aus der index.html Datei aufgebaut, angefangen mit der id="root" und den leeren HTML Tag Element
// Per DOM wird die id="root" geladen und innerhalb vom root wird dann das React mit seinen  Komponenten (App Komponente) aufgebaut.
// Merke: Die main.jsx ist der Einstiegspunkte und die Aufbau von React, die erste richtige Komponente wird hier geladen und ist in diesem Beispiel die  App.jsx als Komponente.
createRoot(document.getElementById('abc')).render(
  <StrictMode>
    <Montag/>
  </StrictMode>,
)
