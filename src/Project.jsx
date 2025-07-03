import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Experience.css';
import './Project.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { supabase } from './supabase-client';

export default function Project({ closer }) {
  const [sites, setSites] = useState([]);

  const getProjects = async() => {
    const { error, data } = await supabase
          .from('projects')
          .select('*');
    
        if (error) {
          console.error(error.message);
          return;
        } else {
          setSites(data);
        }
  }

  useEffect(() => {
    getProjects();
  }, []);

const sitesMapped = sites.map((site, index) => {
  const hasAwards = site.awards.length > 0;
  const isEven = index % 2 === 0;

  return (
    <div
      key={index}
      className="embed-container"
      style={{
        flexDirection: isEven ? 'row' : 'row-reverse',
      }}>
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
        <h1></h1>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>
      <div className="proj-subcontainer">
        <h1>The results of ingesting caffeine</h1>
        <div>{sitesMapped}</div>
      </div>
    </div>
  );
}
