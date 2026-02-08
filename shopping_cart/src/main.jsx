import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextData from './ContextAPI/ContextData.jsx';
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <ContextData>
            <App />
        </ContextData>
    </BrowserRouter>
  
)
