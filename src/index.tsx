import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'

import reportWebVitals from './reportWebVitals'
import theme from './utils/theme'
import App from './App'

import './utils/firebase'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)

reportWebVitals()
