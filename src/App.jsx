import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Login from './pages/Login.jsx'
import Registration from './pages/Registration.jsx'

function App() {
  const [currentpage, setCurrentpage]= useState("register");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  return (
    <div>
      {currentpage === "register" && <Registration/>}
      {currentpage === 'login' && (isLoggedin ?(
        <h1>Welcome, Admin</h1>
      ):(
       <Login onLogin={() => setIsLoggedIn(true)}/>
      ))}
    </div>
  );
}

export default App