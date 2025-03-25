import { StrictMode } from 'react'
// import {  RouterProvider} from "react-router-dom";
import './index.css'
import { createRoot } from 'react-dom/client';
// import { router } from './Routes';
import App from './App';
import 'lenis/dist/lenis.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
