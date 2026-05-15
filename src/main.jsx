import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListStudents } from './components/ListStudents';
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css'
import { App } from './components/App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      < App/>
    </StrictMode>
  </BrowserRouter>

)
