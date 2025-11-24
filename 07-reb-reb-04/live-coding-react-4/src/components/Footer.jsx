import React from 'react'

function Footer({allUsers, currentUser}) {
  return (
    <>
     <div>
      <span>
        Alle User:
        {allUsers.map((user,key)=>(
          <span key={key}>
            {user.firstName} {user.lastName}
          </span>
        ))}
      </span>
      <span>
        Aktueller User: {currentUser.firstName} {currentUser.lastName}
      </span>
      {/* Florian Hahn */}
      </div>
      
    </>
  )
}

export default Footer
