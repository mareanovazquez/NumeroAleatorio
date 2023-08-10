import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NumeroAletorio } from './components/NumeroAleatorio/NumeroAleatorio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Numero aleatorio</h1>
      
      <p className="read-the-docs">
        Numero  generado en base a los datos de fecha y hora
      </p>
      <p className="read-the-docs">
        Después de la barra el número es aleatorio de 0 a 99
      </p>
      <NumeroAletorio/>
    </>
  )
}

export default App
