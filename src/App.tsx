import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout wraps these routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* AuthLayout wraps these routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;