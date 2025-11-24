import React from 'react'
import "./Details.css";

function Details({einkaufsliste}) {
  return (
    <>
      <div className="parent">
        <div className="children-1">
          <p>WERBUNG 1</p>
        </div>
        <div className="children-2">
          <div>
            {/* Wenn wir Higher Oder Functions auf geladene Elemente wie z.B. Daten von einer API in Form von Arrays oder Objekten haben, dann können wir diese über .map .filter oder .reduce() einzeln auf der Webseite darstellen. */}
            {einkaufsliste.map((listElement, key)=>(
              // Hinweis: Each child in a list should have a unique "key" prop, BEDEUTET, wir müssen wieder einem Eltern Element der Higher Order Functions den KEY zuweisen
              <div key={key}>
                <ul className="parent">
                  <li className="children li-item">{listElement}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="children-3">
          <p>WERBUNG 2</p>
        </div>
        <div className="children-1">
          <p>WERBUNG 1</p>
        </div>
      </div>
    </>
  )
}

export default Details
