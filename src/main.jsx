import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListStudents } from './components/ListStudents';
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css'
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store } from './app/store';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        < App />

      </Provider>
    </StrictMode>
  </BrowserRouter>

)
