import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import { CartProvider } from './components/context/CartContext';

// Page Imports
import HomePage from './pages/HomePage';
import ShoesPage from './pages/ShoesPage.jsx';
// import SellPage from './pages/SellPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Assume this hook checks authentication
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shoes" element={<ShoesPage />} />
            {/* <Route path="/sell" element={
              <ProtectedRoute>
                <SellPage />
              </ProtectedRoute>
            } /> */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;