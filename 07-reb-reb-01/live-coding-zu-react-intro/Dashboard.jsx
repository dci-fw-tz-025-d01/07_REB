// rfce für Snippet einer Standard React Komponente
// Annahme: Dashboard ist die Eltern Komponente und ReactIntro ist die Kind Komponente
import React from 'react'; //ES6
// require "React" from "react"; // ES5 - NICHT MEHR BENUTZEN
import ReactIntro from './ReactIntro'; // Laden per ES6 default import der Kind Komponente
// import {ReactIntro} from "ReactIntro"; // Laden per ES6 named import der Kind Komponente
import { addTwoNumbers } from './helpers/calculate';

//function Dashboard() {} // ES5
const Dashboard = () =>{ // ES6
    const pi = 3.14;
    const helperAddTwoTimesPi = addTwoNumbers(pi,pi);

    return (
        <div>
            <div className="abc">
                <span>{helperAddTwoTimesPi}</span>      
                <ReactIntro/>
                {/* Aufruf der importierten React Kind Komponente über </> Tag Element */}
            </div>
        </div>
    );
};
export default Dashboard;