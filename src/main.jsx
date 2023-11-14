import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SaveButton from './SaveButton.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <SaveButton/>
  </StrictMode>
)