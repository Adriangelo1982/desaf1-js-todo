import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.module.css'
import './global.css'
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <App />
  </React.StrictMode>,
)
//Main esta jogando realmente os dados na tela
//index está fazendo a estilização