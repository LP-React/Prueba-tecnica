import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import './styles/normalize.css'
import { Tienda } from './Tienda.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tienda />
  </React.StrictMode>,
)
