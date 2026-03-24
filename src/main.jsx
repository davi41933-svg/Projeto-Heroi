// Importações
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'


// Procura no HTML um elemento com id "root"
// Cria raiz e processa ela (renderizar ela)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)