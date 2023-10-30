import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/wrappers/App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

const theme = extendTheme({
  components: {
    BottomNavigation,
  },
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
