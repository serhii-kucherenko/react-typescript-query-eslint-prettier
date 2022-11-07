import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'
import { ReactQueryProvider } from 'src/core/providers/react-query.provider'

import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactQueryProvider>
        <ModalProvider rootComponent={TransitionGroup}>
          <App />
        </ModalProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
