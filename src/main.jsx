
import { createRoot } from 'react-dom/client'
import { store } from './redux/Store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
   
        <BrowserRouter>
            <Provider store={store}>
                <App />
                <Toaster/>
            </Provider>
        </BrowserRouter>
  


)
