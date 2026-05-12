import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>CRS Progress Hub</h1>
        <p>Welcome to your AI-powered progress tracking application</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test hot module replacement (HMR)
        </p>
      </div>
      <p className="read-the-docs">
        Ready to connect to Loveable for AI-assisted development
      </p>
    </>
  )
}

export default App
