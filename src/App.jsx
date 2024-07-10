import './App.css'
import Menu from './components/Menu'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios('http://localhost:3000/usuarios')
      console.log(response)
      setUsers(response.data)
    }
    fetchUsers()
  })

  return (
    <>
      <Menu />
      <h1>Dashboard</h1>

      {!!users && users.map((user) => (
          <div key={user.id}>
            <p>{user.nome}</p>
            <p>{user.email}</p>
          </div>
        )
      )}
    </>
  )
}

export default App
