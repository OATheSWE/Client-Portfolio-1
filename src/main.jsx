import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import App from './App.jsx'
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</MantineProvider>
)
