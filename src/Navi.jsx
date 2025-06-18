import './App.css';

function Navi() {
  return (
    <div className="navigation-bar">
      <strong style={{ marginLeft: '30px' }}>
        <i>acaffeinatedcoder</i>
      </strong>
      <div className="nav-links">
        <div className="nav-item">
          <h2>Experience</h2>
        </div>
        <div className="nav-item">
          <h2>Profile</h2>
        </div>
        <div className="nav-item">
          <h2>Works</h2>
        </div>
        <div className="nav-item">
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}

export default Navi;
