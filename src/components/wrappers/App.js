// import { useContext, useState } from 'react'
// import { ActiveNav } from '../../util/AppContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate
} from 'react-router-dom'
// import '../../assets/style/App.css'

import HistoryPage from './history'
import ProfilePage from './profile'
import Home from './home'
import Login from './login'
import Register from './register'
import { Box, Container } from '@chakra-ui/react'
import { Navigation } from '../ui/Navbar'
import FranchisePage from './franchise'
import DetailFranchise from './detail-franchise'
import { isAuthenticated } from '../../services/authService';

function App() {
  const navigate = useNavigate()
  const handleNav = (path) => {
    navigate(path)
  }
  return (
    <Container pt="5" minH="calc(100vh - 48px)" pb="48px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={isAuthenticated() ? (
            <HistoryPage />
          ) : (
            <Navigate to="/login" replace />
          )}  
        />
        <Route path="/profile" element={isAuthenticated() ? (
            <ProfilePage />
          ) : (
            <Navigate to="/login" replace />
          )} 
        />
        <Route path="/franchise" element={<FranchisePage />} />
        {/* detail franchise */}
        <Route path="/franchise/:id" element={<DetailFranchise />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Box h="48px">
        <Navigation handleChange={handleNav} />
      </Box>
    </Container>
  )
}

export default App
