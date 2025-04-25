import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Renders child routes here */}
      </main>
      <Footer />
    </div>
  );
}