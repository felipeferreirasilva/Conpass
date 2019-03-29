import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// Importa createstore para criar uma store
import { createStore } from 'redux'

// Importa reducers combinados
import RootReducer from './reducers'

// Importa Provider para conectar app ao redux
import { Provider } from 'react-redux'

// Importa react router
import { BrowserRouter } from 'react-router-dom'

// Importa bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importa custom css
import './index.css';

// Cria store passando o Reducers combinado como parametro
const store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

