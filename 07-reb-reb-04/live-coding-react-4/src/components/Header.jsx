import React from 'react'
import "./Header.css";

function Header({darkMode, setDarkMode}) {
  return (
    <>
      <div className="parent">
        <div className="children">
          <img className="logo-dci" src="https://hamburg.kursportal.info/admin/media.php/logo/anbieter/870851/logo_digital_career_institute.PNG" alt=""/>
        </div>
        <div className="children-2">
          <nav>
            <ul className="parent">
              <li className="children"><a href="">Home</a></li>
              <li className="children"><a href="">Detail</a></li>
              <li className="children"><a href="">About</a></li>
            </ul>
          </nav>
        </div>
        <div className="children">
          <button onClick={()=>setDarkMode(!darkMode)}> 
            {/* Conditional Rendering = Ich ändere den Inhalt auf der Webseite basierend auf einer Variablen aus dem React
            SPAN ist das einige HTML Text Tag Element, welches keinen Zeilenumbruch aktiviert (h,p) und kein Default CSS Setting hat.
            Merke: Wir können das onClick auf das gesamte Tag Element (button) oder auf die einzeln gerenderten Conditional Elemente (span) legen. */}
            {
            !darkMode ? 
            <span>Deaktiviere Darkmode</span> 
            : 
            <span>Aktiviere Darkmode</span>
            }
          </button> 
        </div>
      </div>
    </>
  )
}

export default Header
