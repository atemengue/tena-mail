import AuthLayout from 'components/layouts/AuthLayout';
import LoginPage from 'pages/auth/login';
import RegisterPage from 'pages/auth/register';
import { JSX, ReactNode, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/home/Home';

// Create an AuthProvider or use a custom hook
export function useAuth() {
  // Check localStorage for existing auth token
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData: any, token: string) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('authToken', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return { user, login, logout };
}

// ProtectedRoute component
function ProtectedRoute({ children } : { children: ReactNode }) : JSX.Element  {
  const { user } = useAuth();
  return user ? <>children</> : <Navigate to="/login" replace />;
}

// AuthRoute component (for routes that should only be accessible when not logged in)
function AuthRoute({ children } : { children: ReactNode }) : JSX.Element {
  const { user } = useAuth();
  return !user ? <>{children}</> : <Navigate to="/" replace />;
}


function App() {
  return (
    <HashRouter>
      <Routes>
        {/* MainLayout wraps these routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Route>

         {/* AuthLayout wraps these routes */}
         <Route 
            element={<AuthLayout />}>

          <Route path="/login" element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          } />

          <Route path="/register" element={
            <AuthRoute>
              <RegisterPage />
            </AuthRoute>
          } />
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;