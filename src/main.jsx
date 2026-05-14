import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListStudents } from './components/ListStudents';
import './styles/main.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListStudents/>
  </StrictMode>,
)
