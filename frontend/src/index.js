import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import store from './redux/store'
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store = {store}>
     <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
);


