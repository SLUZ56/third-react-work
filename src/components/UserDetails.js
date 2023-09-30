import React from 'react'
import { useState } from 'react'

const UserDetails = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Selma", age: 57, profession: "programadora"},
        { id: 2, name: "João", age: 25, profession: "advogado"},
        { id: 3, name: "Matheus", age: 35, profession: "médico"},
        { id: 4, name: "Marina", age: 41, profession: "professora"}
     
       ])

       const [age] = useState(false)  // false


  return (

    <div>

        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} - {user.profession}
                </li>
            ))}
        </ul>
        <div>
       <h1>Usuário pode tirar carteira de habilitação?</h1>
       
       <h1> Usuário é maior de 18 anos? </h1>
       <p>checar se idade é maior que 18 </p>
       {age && <p> Se age for true, pode tirar a carteira! </p>}
       {!age && <p> Se age for false, é menor de idade! </p>}
       </div>
        
    </div>
  )
}

export default UserDetails