import { useState } from 'react';
import './App.css';
import Navi from './Navi';

/**
 * Experience Page:
 *  - Academic Records
 *  - CV?
 *  - Certificates
 * 
 * Profile Page:
 *  - More Photos
 *  - Art
 *  - Motto
 *  - Poems?
 * 
 * Projects Page:
 *  - Websites
 *    - Role
 *    - Brief Description
 *    - Functionalities
 *    - Awards if any
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
  // const [count, setCount] = useState(0)

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Navi />
      <div className="overall-container">
        <div className="photo-container">
          <img src="/me-2.png" className="me-class" />
        </div>
        <div className="opening-card">
          <h1 style={{ color: '#3e1e04' }}>
            <i>acaffeinatedcoder.dev</i>
          </h1>
          <div className="card">
            <h2>
              Welcome to my personal website where you'll get to know my
              hobbies, interests, and whatnot.
            </h2>
            <h4 style={{ paddingLeft: '90px' }}>
              <i>It's my website so I'll pretty much put in whatever I want.</i>
            </h4>
          </div>
          <div className="palette-container">
            <div
              className="my-rectangle"
              style={{ backgroundColor: '#3e1e04' }}></div>
            <div
              className="my-rectangle"
              style={{ backgroundColor: '#6a3005' }}></div>
            <div
              className="my-rectangle"
              style={{ backgroundColor: '#965015' }}></div>
            <div
              className="my-rectangle"
              style={{ backgroundColor: '#c4923e' }}></div>
            <div
              className="my-rectangle"
              style={{ backgroundColor: '#cbac85' }}></div>
            <div
              className="my-rectangle"
              style={{ backgroundColor: '#ffffff' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
