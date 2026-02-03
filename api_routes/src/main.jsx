import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import ContextData from './component/ContextData.jsx';
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <ContextData>
            <App />
        </ContextData>
    </BrowserRouter>
  
)
