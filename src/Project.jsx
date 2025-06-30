import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Experience.css';
import './Project.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Project({ closer }) {
  const [sites, setSites] = useState([
    {
      siteLink: 'https://punctuality-78586.web.app/',
      title: 'PunctualITy',
      roles: ['Fullstack'],
      description: 'An RFID-enabled web app for logging and tracking student attendance in real time. Built with ReactJS and Firebase, it separates time-ins and time-outs, auto-generates timestamps, and stores records in the cloud for instant access and future analytics.',
      awards: [],
    },
    {
      siteLink: 'https://sctrack-f257d.web.app/',
      title: 'SCTrack',
      roles: ['Backend', 'Team Leader'],
      description: 'A web-based ticketing system developed for Siena College of Taytay to streamline job order submissions. Built with ReactJS and Firebase, SCTrack significantly reduces manual effort by allowing users to log maintenance and service requests digitally, improving efficiency for both ITS and non-ITS personnel.',
      awards: ['Best College Thesis', 'Albertus Magnus Research Award'],
    },
  ]);

  const sitesMapped = sites.map((sites, index) => {
    if (sites.awards.length !== 0) {
      return (
        <div
          style={{
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
          className="embed-container"
          key={index}>
          <div className="iframe-wrapper" style={{ flex: 2 }}>
            <iframe
              src={sites.siteLink}
              style={{
                transform: 'scale(1)',
                transformOrigin: index % 2 === 0 ? 'top left' : 'top right',
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
            <h1>{sites.title}</h1>
            <h3>Roles in the Development</h3>
            <div className="proj-roles">
              {sites.roles.map((role, index) => (
                <p key={index}>{role}</p>
              ))}
            </div>           <p>{sites.description}</p>
            <h2>Awards</h2>
            <div className="proj-awards">
              {sites.awards.map((award, index) => (
                <p key={index}>{award}</p>
              ))}
            </div>
            <div className='embed-visit'>
                <button onClick={() => window.open(sites.siteLink, '_blank')}>Visit</button>
            </div> 
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
          className="embed-container"
          key={index}>
          <div className="iframe-wrapper" style={{ flex: 2 }}>
            <iframe
              src={sites.siteLink}
              style={{
                transform: 'scale(1)',
                transformOrigin: index % 2 === 0 ? 'top left' : 'top right',
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
            <h1>{sites.title}</h1>
            <h3>Roles in the Development</h3>
            <div className="proj-roles">
              {sites.roles.map((role, index) => (
                <p key={index}>{role}</p>
              ))}
            </div>
            <p>{sites.description}</p>
            <div className='embed-visit'>
                <button onClick={() => window.open(sites.siteLink, '_blank')}>Visit</button>
            </div>
          </div>
        </div>
      );
    }
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
