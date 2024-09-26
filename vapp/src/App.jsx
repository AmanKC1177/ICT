import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Signup } from './components/Signup'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { StateBasics } from './components/StateBasics'
import {Counter } from './components/Counter'
import Api from './components/Api'
import  Pokemon  from './components/Pokemon'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/n" element={<StateBasics />} />
        <Route path="/c" element={<Counter />} />
        <Route path="/v" element={<Api />} />
        <Route path="/x" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App
