import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BeverageFinder } from './BeverageFinder'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BeverageFinder />
  </StrictMode>,
)
