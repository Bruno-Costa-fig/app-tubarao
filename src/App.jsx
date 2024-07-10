import './App.css'
import Menu from './components/Menu'
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData(){
      const resultado = await axios.get("http://localhost:3000/usuarios")
  
      setUsers(resultado.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Menu />
      <h1>Dashboard</h1>

      {!!users && users.map((user) => (
          <div key={user.id}>
            <p>{user.nome} - {user.email}</p>
          </div>
        )
      )}
    </>
  )
}

export default App
