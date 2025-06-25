
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Profile({ closer }) {
    return (
        <div className="exp-container">
              <div className="modal-header">
                <h2>
                  <span style={{ color: '#6a3005' }}>Who</span> am I
                  <span style={{ color: '#6a3005' }}>?</span>
                </h2>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="modal-closer"
                  onClick={() => closer()}
                />
              </div>
            </div>
    )
}