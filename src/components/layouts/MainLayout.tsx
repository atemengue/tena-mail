import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Sidebar from './SideBar';

export default function MainLayout() {
  return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Outlet /> {/* Renders child routes here */}
          </main>
          <Footer />
        </div>
      </div>
);
}