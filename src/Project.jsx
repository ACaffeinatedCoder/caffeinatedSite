import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { supabase } from './supabase-client';
import Prompt from './Prompt';

export default function Project({ closer }) {
  const [sites, setSites] = useState([]);
  const [checked, setChecked] = useState(false);

  const [showPrompt, setShowPrompt] = useState(false);
  const [promptVisible, setPromptVisible] = useState(false);

  const getProjects = async () => {
    const { error, data } = await supabase.from('projects').select('*');

    if (!error && data) {
      setSites(data);
    } else {
      setSites([]);
    }

    setChecked(true);
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (!checked) return;

    if (sites.length === 0) {
      setShowPrompt(true);
      setTimeout(() => setPromptVisible(true), 50);
    }
  }, [checked, sites.length]);

  const closePrompt = () => {
    setPromptVisible(false);
    setTimeout(() => setShowPrompt(false), 300);
  };

  const sitesMapped = sites.map((site, index) => {
    const hasAwards = site.awards.length > 0;
    const isEven = index % 2 === 0;

    return (
      <div
        key={index}
        className="embed-container"
        style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}
      >
        <div className="iframe-wrapper" style={{ flex: 2 }}>
          <iframe
            src={site.siteLink}
            style={{
              transform: 'scale(1)',
              transformOrigin: isEven ? 'top left' : 'top right',
              width: '100%',
              height: '54vh',
              border: '5px solid #cbac85',
              borderRadius: '15px',
              margin: '10px',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div className="embed-details">
          <h1>{site.title}</h1>

          <h3>Roles in the Development</h3>
          <div className="proj-roles">
            {site.roles.map((role, i) => (
              <p key={i}>{role}</p>
            ))}
          </div>

          <p>{site.description}</p>

          {hasAwards && (
            <>
              <h2>Awards</h2>
              <div className="proj-awards">
                {site.awards.map((award, i) => (
                  <p key={i}>{award}</p>
                ))}
              </div>
            </>
          )}

          <div className="embed-visit">
            <button onClick={() => window.open(site.siteLink, '_blank')}>
              Visit
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="proj-container">
      <div className="modal-header">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>

      <div className="proj-subcontainer">
        <h1>The results of ingesting caffeine</h1>
        <div style={{ paddingBottom: '70px' }}>
          {sitesMapped}
        </div>
      </div>

      {showPrompt && (
        <div className={`prompt-overlay ${promptVisible ? 'fade-in' : 'fade-out'}`}>
          <Prompt closer={closePrompt} autoClose={5000} />
        </div>
      )}
    </div>
  );
}
