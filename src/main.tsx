import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes.tsx'
import { PokemonProvider } from './context/PokemonContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PokemonProvider>
  </StrictMode>
)
