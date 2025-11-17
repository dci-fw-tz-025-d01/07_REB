// Webseite gegen Webapplikation(Software Stack mit 4 Ebenen wie z.B. MERN)
// SPA(Single-Page-Applikation) - MPA(Multi-Page-Applikation) - PWA(Progressive Web App)
// DOM versus virtual DOM (Virtual DOM wird im React verwendet)
// Wie erkenne ich eine wiederverwenbare, dynmaische Komponente (z.B. Login,Suche,Warenkorb)
// SPA über React oder Angular, Vue, Svelte
// React kommt von META/Facebook
// React ist die Kernbibliothek neben zwei weiteren von META
// React kann auch als Server Side Rendering (SSR) mit NextJS oder als App über React Native
// Liveshare: https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare
// React Devs -Getting Started: https://react.dev/learn
// React Developer Tools in Browser installieren - Tab Components

const addTwoNumbers = (one,two) =>{
    return one+two; //Datenstruktur Number als Kalkulation im JS/TS
}
addTwoNumbers(4,2);

// React hat Komponenten die wir als Bindung mit HTML,CSS UND JavaScript verwenden sollen
// Im Return der Funktion kann ich dieses Binding verwenden, d.h. der return ist HTML
import styles from "style.css";
import loginUser from "./loginUser";
import { substractTwoNumbers } from "./helpers/calculate";

const ReactIntro = () =>{ // ES6 Funktion ReactIntro ist die React Komponente mit einem JSX return, alles was wir vor dem RETURN schreiben ist normales JS/TS
   
    // Vor dem return können wir weitere Berechnungen durchführen, Daten laden, Daten validieren, Local Storage zugreifen
    loginUser();
    const pi = 3.14;
    substractTwoNumbers(pi,pi);

    // Return in einer React Komponente stellt die Inhalte auf der Webseite dar, mit unserer JSX Syntax
    return ( // JSX im RETURN für das Binding
        // Eine React Komponente im JSX hat immer ein Eltern Element
        <div className="abc"> {/** Im JSX className für eine Klasse schreiben */}
            {console.log("Hallo, das ist JS im HTML return vom JSX")}
            {pi}
        </div>   
    );
};
const pi =3.14;
// export {ReactIntro, addTwoNumbers, pi}; // Named export der Funktion(Komponente)
export default ReactIntro;// Export default exportiert die Funktion(Komponente) standardmäßig als EINZIGEN export


// 1. Eine React Komponten verwendet dieses Bindung und heißt JSX (JavaScript and XML)
// 2. JSX bedingt eine Komponete im React mit Großbuchstaben
// 3. React Komponente eine Funktion ist und einen Rückgabewert hat (ES5/ES6)
// 4. React Komponenten haben das Dateiformat .jsx
// 5. Verbinden von HTML und CSS: Einzige Änderung zu einer .html Datei (HTML Tag Elementen) ist, dass wir das class className im JSX schreiben müssen
// 6. Verbinden von HTML und JS: Das wechseln mit den Curly Brackets {}
// 7. Wir müssen die erstelle Komponente exportieren
// Optional: rfce erstellt eine neue Standard React Komponente

// Egal ob ihr npm, deno, yarn oder bun verwendet, wir brauchen die React Umgebung
// sudo bun create vite
// npm create vite@latest
// deno init --npm vite
// yarn create vite@latest
// BUN KURZ: bun create vite NAME --template react