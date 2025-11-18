import {useState} from "react";
const UseState = () => {
    const [userName, setUserName] = useState("Florian");
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            {!isLoading ? 
            <div>
                <span>Zurzeit wird geladen...</span>
                <button onClick={setIsLoading(true)}>Setze laden auf true</button>
            </div>
            : 
            <div>
                {userName}
                <button onClick={()=>setUserName("Dienstag")}>Update UserName</button>
            </div>
            }
        </>
    )
}
export default UseState