import App from './components/App';
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container!);

export async function Start() {

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
Start().catch((error) => {
  console.log('Init failed:', error)
})
