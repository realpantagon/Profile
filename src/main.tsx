import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-dark-teal/theme.css";



ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <PrimeReactProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </PrimeReactProvider>
)
