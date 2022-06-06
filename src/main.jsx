import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './pages/signup'
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <div className='app-container'>
      <SignUp/>
    </div>
  </React.StrictMode>
)
