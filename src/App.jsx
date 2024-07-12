import './App.css'
import Menu from './components/Menu'
import { useState, useEffect, useContext } from 'react'
import axios from "axios"
import {AuthContext} from "./context/AuthContext"

function App() {
  const [users, setUsers] = useState([])

  const {logado} = useContext(AuthContext)

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

      {logado() && !!users && users.map((user) => (
          <div key={user.id}>
            <p>{user.nome} - {user.email}</p>
          </div>
        )
      )}
    </>
  )
}

export default App
