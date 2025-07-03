import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { supabase } from './supabase-client';

export default function Experience({ closer }) {
  const [experiences, setExperiences] = useState([]);

  const getExp = async () => {
    const { error, data } = await supabase
      .from('experience')
      .select('*')
      .order('date_start', { ascending: false });

    if (error) {
      console.error(error.message);
      return;
    } else {
      setExperiences(data);
    }
  };

  useEffect(() => {
    getExp();
  }, []);

  useEffect(() => {
    console.log(experiences);
  }, [experiences]);

  const expMapped = experiences.map((exp) => {
    const isEducation = exp.exp_type === 'EDUCATION';
    const hasDetails = exp.role_details.length !== 0;
    const isCurrent = exp.exp_type === 'WORK' && exp.date_end === null;
    const icon = isEducation ? faGraduationCap : faUserTie;
    console.log(isCurrent);
    const flagDate = new Date(exp.date_start).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
    });

    const fullStart = new Date(exp.date_start).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const fullEnd = exp.date_end
      ? new Date(exp.date_end).toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Current';

    return (
      <div className="exp-content-item" key={exp.id}>
        <div className="exp-left">
          <div className="time-tag">{flagDate}</div>
        </div>

        <div className="exp-middle">
          <FontAwesomeIcon icon={icon} className="modal-icon" />
          <div className="timeline"></div>
        </div>

        <div className="exp-right">
          <div className="exp-subHeader">
            <h2>
              {exp.organization} - {exp.role_description.toUpperCase()}
            </h2>
          </div>

          <p>
            From <i title={fullStart}>{flagDate}</i>{' '}
            {isCurrent ? (
              <>
                and is <i>currently employed</i>
              </>
            ) : (
              <>
                to <i title={fullEnd}>{fullEnd}</i>
              </>
            )}
          </p>

          {hasDetails && (
            <>
              <h3>{isEducation ? 'Highlights' : 'Job Description'}</h3>
              <div className="exp-subcontent-item">
                <ul>
                  {exp.role_details.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="exp-container">
      <div className="modal-header">
        <div
          style={{ gap: '1rem', display: 'flex', flexDirection: 'row' }}></div>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>
      <div className="exp-contents">{expMapped}</div>
    </div>
  );
}
