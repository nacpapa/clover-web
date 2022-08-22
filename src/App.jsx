import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="superior">
        <a href="https://www.cloverweb.com.ar/" target="_blank">
          <img src="/logo.png" className="logo" alt="clover logo" />
        </a>
      </div>
     
    </div>
  )
}

export default App
