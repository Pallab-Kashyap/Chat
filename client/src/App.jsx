import { useState } from 'react'
import './App.css'
import ChatInterface from './pages/Chat/ChatInterface'
// import connect from './socket'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // connect();
  }

  return (
    <>
      <ChatInterface />
      {/* <button onClick={handleClick}>connect</button> */}
    </>
  )
}

export default App
