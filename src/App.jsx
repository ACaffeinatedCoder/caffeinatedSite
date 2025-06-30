import { useState, useEffect } from 'react';
import './App.css';
import Navi from './Navi';
import Experience from './Experience';
import Profile from './Profile';
import Contact from './Contact';
import Project from './Project';

/**
 *  Palette 
| Color Name      | Hex       | Usage                          |
| --------------- | --------- | ------------------------------ |
| *dunno*         | `#462003` | Dark text color                |
| **Dark Roast**  | `#3e1e04` | Background, navbar, base color |
| **Espresso**    | `#6a3005` | Cards, panels, code blocks     |
| **Mocha Cream** | `#965015` | Text highlights, soft borders  |
| **Latte Foam**  | `#c4923e` | Accent text, muted icons       |
| **Coffee Dust** | `#cbac85` | Primary text color             |
| *dunno*         | `#ffd6a3` | Primary text color             |
| **Pure White**  | `#FFFFFF` | Headers or important contrasts |

 */

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [activeOverlay, setActiveOverlay] = useState(null);

  useEffect(() => {
    if (activeOverlay) {
      setShowOverlay(true);
      setAnimationClass('slide-up');
    }
  }, [activeOverlay]);

  const closeOverlay = () => {
    setAnimationClass('slide-down');
    setTimeout(() => {
      setShowOverlay(false);
      setActiveOverlay(null);
    }, 600);
  };

  const downloadCV = () => {
    // https://docs.google.com/document/d/1y6crW1i6mIigV_5OkiycpdWYhUO80CLB/edit?usp=sharing&ouid=100487627971534132954&rtpof=true&sd=true
    const exportURL = 'https://docs.google.com/document/d/1y6crW1i6mIigV_5OkiycpdWYhUO80CLB/export?format=pdf';
    const link = document.createElement('a');
    link.href = exportURL;
    link.download = 'acaffeinatedcoder_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="app-wrapper">
      <div className="navigation-bar">
        <strong className="brand" onClick={() => window.open('https://github.com/ACaffeinatedCoder', '_blank')}>
          <i>acaffeinatedcoder</i>
        </strong>
        <div className="nav-links">
          <button
            className="nav-item"
            onClick={() => setActiveOverlay('experience')}
            disabled={activeOverlay === 'experience'}>
            <h2>Experience</h2>
          </button>
          <button
            className="nav-item"
            onClick={() => setActiveOverlay('profile')}
            disabled={activeOverlay === 'profile'}>
            <h2>Profile</h2>
          </button>
          <button
            className="nav-item"
            onClick={() => setActiveOverlay('projects')}
            disabled={activeOverlay === 'projects'}>
            <h2>Projects</h2>
          </button>
          <button
            className="nav-item"
            onClick={() => setActiveOverlay('contact')}
            disabled={activeOverlay === 'contact'}>
            <h2>Contact</h2>
          </button>
        </div>
      </div>

      <div className="overall-container">
        <div className="photo-container">
          <img src="/me-2.png" className="me-class" />
        </div>

        <div className="opening-card">
          <h1>
            <span style={{ color: '#3e1e04' }}>
              Hi, I'm
              <span style={{ color: '#6a3005' }}> Casey Francisco</span>!
            </span>
          </h1>
          <div className="card">
            <h2 style={{ textAlign: 'justify' }}>
              I am a Backend-focused Full-stack Web Developer with a passion for
              building reliable systems and teaching others how to code.
            </h2>
            <div style={{ textAlign: 'center' }}>
              <h4>
                <i>Fueled by coffee with an eye for clean code.</i>
              </h4>
              <button onClick={() => downloadCV()}>Download my CV</button>
            </div>
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className={`overlay ${animationClass}`}>
          {activeOverlay === 'experience' && (
            <Experience closer={closeOverlay} />
          )}
          {activeOverlay === 'profile' && <Profile closer={closeOverlay} />}
          {activeOverlay === 'contact' && <Contact closer={closeOverlay} />}
          {activeOverlay === 'projects' && <Project closer={closeOverlay} />}
        </div>
      )}
    </div>
  );
}

export default App;
