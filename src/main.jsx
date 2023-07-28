import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from '@mui/material';
import poketheme from './context/pokeTheme.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={poketheme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>

);
