import React, { useState } from 'react'
import { TestSass } from './components/test-sass';
import logo from './logo.svg'
import './App.css'
import './test.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TestSass />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="font_red">
          <a
            className="App-link dark"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React test
          </a>
          {' | '}
          <a
            className="App-link extendTest bg"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
