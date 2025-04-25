import AuthLayout from 'components/layouts/AuthLayout';
import LoginPage from 'pages/auth/login';
import RegisterPage from 'pages/auth/register';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/home/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* MainLayout wraps these routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

         {/* AuthLayout wraps these routes */}
         <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;