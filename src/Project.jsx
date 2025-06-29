import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Experience.css';
import './Project.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Project({ closer }) {
  return (
    <div className="proj-container">
      <div className="modal-header">
        <h1></h1>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>
      <div className="proj-subcontainer">
        <h1>Projects</h1>
      </div>
    </div>
  );
}
