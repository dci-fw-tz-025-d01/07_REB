import React, {useState} from 'react'

function UserCreate() {
    const [userName, setUserName] = useState("");
    const handleInputUserName = (event) =>{
        // setUserName("Florian"); // Problem: Hardcode Wert vom String
        setUserName(event.target.value); // Dynamischen Wert vom input.value schreiben
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();
    };
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label>UserName</label>
            <input 
                type="text"
                onChange={handleInputUserName}
            />
        </form>
        <span>Dein Username ist: {userName}</span>
    </div>
  )
}

export default UserCreate