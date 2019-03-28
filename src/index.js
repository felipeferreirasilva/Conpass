import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux'
import RootReducer from './reducers'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

