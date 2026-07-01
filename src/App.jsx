import { NavLink, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import './App.css';

const navLinks = [
  { to: '/', label: 'Dashboard' },
  { to: '/projects', label: 'Projects' }
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">MP</div>
          <div>
            <p className="brand-name">Maya Portfolio</p>
            <p className="brand-subtitle">Product designer & front-end engineer</p>
          </div>
        </div>
        <nav className="main-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>Crafting storytelling dashboards with React + Vite.</p>
      </footer>
    </div>
  );
}
