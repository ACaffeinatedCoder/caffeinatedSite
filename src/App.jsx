import { useState } from 'react';
import './App.css';
import Navi from './Navi';
import Experience from './Experience';

/**
 * Experience Page:
 *  - Academic Records
 *  - CV?
 *  - Certificates
 *
 * Profile Page:
 *  - More Photos
 *    - Gallery style
 *  - Art
 *    - Gallery style
 *  - Motto
 *    - Header?
 *  - Poems?
 *
 * Projects Page:
 *  - Websites
 *    - Role
 *    - Brief Description
 *    - Functionalities
 *    - Awards if any
 *    - Link
 *    - Screenshots of pages
 *      - Gallery Style
 *
 * Contact Page:
 *  - Social Media Links
 *  - Email
 *  - Contact no.?
 */

/**
 *  Palette 
| Color Name      | Hex       | Usage                          |
| --------------- | --------- | ------------------------------ |
| **Dark Roast**  | `#3e1e04` | Background, navbar, base color |
| **Espresso**    | `#6a3005` | Cards, panels, code blocks     |
| **Mocha Cream** | `#965015` | Text highlights, soft borders  |
| **Latte Foam**  | `#c4923e` | Accent text, muted icons       |
| **Coffee Dust** | `#cbac85` | Primary text color             |
| **Pure White**  | `#FFFFFF` | Headers or important contrasts |

 */

function App() {
  const [exp, setExp] = useState(false);
  
  return (
    <div className="app-wrapper">
      <div className="navigation-bar">
        <strong className="brand">
          <i>acaffeinatedcoder</i>
        </strong>
        <div className="nav-links">
          <button
            className="nav-item"
            onClick={() => setExp(!exp)}
            disabled={exp}
          >
            <h2>Experience</h2>
          </button>
          <div className="nav-item">
            <h2>Profile</h2>
          </div>
          <div className="nav-item">
            <h2>Projects</h2>
          </div>
          <div className="nav-item">
            <h2>Contact</h2>
          </div>
        </div>
      </div>

      <div className="overall-container">
        <div className="photo-container">
          <img src="/me-2.png" className="me-class" />
        </div>

        <div className="opening-card">
          <h1 className="site-title">
            <i>acaffeinatedcoder.dev</i>
          </h1>
          <div className="card">
            <h2>
              Welcome to my personal website where you'll get to know my
              hobbies, interests, and whatnot.
            </h2>
            <h4 style={{ textAlign: 'center' }}>
              <i>It's my website so I'll pretty much put in whatever I want.</i>
            </h4>
            <h3>Palette:</h3>
            <div className="palette-container">
              {[
                '#3e1e04',
                '#6a3005',
                '#965015',
                '#c4923e',
                '#cbac85',
                '#ffffff',
              ].map((color, index) => {
                // Function to determine whether to use white or black text
                const getTextColor = (bgColor) => {
                  const r = parseInt(bgColor.slice(1, 3), 16);
                  const g = parseInt(bgColor.slice(3, 5), 16);
                  const b = parseInt(bgColor.slice(5, 7), 16);
                  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                  return brightness < 128 ? '#ffffff' : '#000000'; // Bright text for dark bg, dark text for light bg
                };

                const textColor = getTextColor(color);

                return (
                  <div
                    key={index}
                    className="my-rectangle"
                    style={{ backgroundColor: color, color: textColor }}>
                    <p>{color}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {exp && (
        <div className={`overlay slide-up`}>
          <Experience closer={setExp}/>
        </div>
      )}
    </div>
  );
}

export default App;
