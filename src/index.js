import React from "react";
import App from "./App";
// import './estilo.css';
import "./index.css"
import { createRoot } from 'react-dom/client';


// Estrutura da Página do React
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);