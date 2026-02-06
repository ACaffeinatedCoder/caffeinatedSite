import './Prompt.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

function Prompt({ closer }) {
  return (
        <div className="prompt-container">
            <div className="prompt-header">
                <FontAwesomeIcon
                icon={faCircleXmark}
                className="prompt-closer"
                onClick={() => closer(false)}
                />
            </div>
            <div className="prompt-subcontainer">
                <h1><i>Currently having trouble pulling data...</i></h1>
                <h3><i>Fixes are underway.</i></h3>
        </div>
    </div>
  );
}

export default Prompt;
