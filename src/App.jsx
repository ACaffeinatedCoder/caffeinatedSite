import { useState } from 'react';
import './App.css';
import Experience from './Experience';
import Profile from './Profile';
import Contact from './Contact';
import Project from './Project';
import {
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelope,
  FaAward,
  FaHamburger,
} from 'react-icons/fa';
import Certificates from './Certificates';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activePage) {
      case 'profile':
        return <Profile />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Project />;
      case 'contact':
        return <Contact />;
      case 'certificate':
        return <Certificates />;
      default:
        <Profile />;
    }
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <button
          className={`collapse-btn ${sidebarOpen ? 'expanded' : 'collapsed'}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaHamburger />
        </button>
        <div className="photo-container">
          <img src="/me-transparentbg.png" className="me-class" alt="Casey" />
        </div>

        <nav className="nav-links">
          <button
            className={activePage === 'profile' ? 'active' : ''}
            onClick={() => setActivePage('profile')}>
            <FaUser className="nav-icon" />
            {sidebarOpen && <span className="nav-label">Profile</span>}
          </button>

          <button
            className={activePage === 'experience' ? 'active' : ''}
            onClick={() => setActivePage('experience')}>
            <FaBriefcase className="nav-icon" />
            {sidebarOpen && <span className="nav-label">Experience</span>}
          </button>

          <button
            className={activePage === 'projects' ? 'active' : ''}
            onClick={() => setActivePage('projects')}>
            <FaFolderOpen className="nav-icon" />
            {sidebarOpen && <span className="nav-label">Projects</span>}
          </button>

          <button
            className={activePage === 'certificate' ? 'active' : ''}
            onClick={() => setActivePage('certificate')}>
            <FaAward className="nav-icon" />
            {sidebarOpen && <span className="nav-label">Certificates</span>}
          </button>

          <button
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => setActivePage('contact')}>
            <FaEnvelope className="nav-icon" />
            {sidebarOpen && <span className="nav-label">Contact</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="content-area">
        <div className="subcontent-area">
          <div className="subcontent-scroll">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
