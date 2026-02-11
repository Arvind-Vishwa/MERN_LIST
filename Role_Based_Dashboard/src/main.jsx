
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ContextData from './ContextAPI/ContextData.jsx';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <ContextData>
        <App />
    </ContextData>
    </BrowserRouter>
  
)
