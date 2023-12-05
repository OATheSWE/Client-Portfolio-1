import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</MantineProvider>
)
