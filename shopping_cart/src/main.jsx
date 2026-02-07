import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextData from './ContextAPI/ContextData.jsx';
createRoot(document.getElementById('root')).render(
  
    <ContextData>
        <App />
    </ContextData>
  
)
