import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {
  faGraduationCap,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { supabase } from './supabase-client';

export default function Experience({ closer }) {
  const [pages, setPages] = useState([
    {
      title: 'Experience',
      description: 'Operations Support Analyst',
      organization: 'Netzwelt, Inc.',
      role: 'Operations Support Analyst',
      subDetails: [
        'Team & Customer Communication: Coordinate with colleagues daily via Teams or Zoom, and follow up with customers through email or phone regarding claims and inquiries.',
        'Claim Validation & Support: Validate customer claims based on promotion mechanics and handle inquiries received through the support mailbox.',
        'Process Improvement: Join process analysis meetings, identify areas for improvement, and maintain a strong understanding of internal workflows.',
      ],
      dateStart: 'March 2025',
      dateEnd: 'May 2025',
    },
    {
      title: 'Experience',
      description: 'Part-time Course Instructor',
      organization: 'Siena College of Taytay',
      role: 'Part-time Course Instructor',
      subDetails: [
        'Teaching BSCS and BSIT students in Data Analysis with Python Programming',
        'Teaching BSIT students in Systems Administration',
        'Teaching BSCS students in Basic Web Development',
        'Teaching BSIT students in Information Assurance and Security',
      ],
      dateStart: 'August 2024',
      dateEnd: 'Now',
    },
    {
      title: 'Education',
      description: 'College',
      organization: 'Siena College of Taytay',
      role: 'Computer Science',
      dateStart: 'August 2020',
      dateEnd: 'May 2024',
      subDetails: [
        'Receiver of the Albertus Magnus Award',
        'Receiver Best College Thesis',
        "Dean's Lister",
        'Founder of the Peer Tutoring Program',
      ],
    },
    {
      title: 'Education',
      description: 'Senior High School',
      organization: 'Siena College of Taytay',
      role: 'STEM Strand',
      dateStart: 'June 2018',
      dateEnd: 'May 2020',
      subDetails: [],
    },
  ]);

  const [experiences, setExperiences] = useState([]);

  const getExp = async() => {
    const {error, data} = await supabase.from("experience").select("*");
    
    if (error) {
      console.error(error.message);
      return
    } else {
      setExperiences(data)
    }
  }

  useEffect(() => {
    getExp()
  }, [])

  useEffect(() => {
    console.log(experiences)
  }, [experiences])

  const experiencesMapped = experiences.map((exp) => {
    return(
      <div className="exp-content-item" key={exp.id}>
          <div className="exp-left">
            <div className="time-tag">{exp.date_start}</div>
            <div>FROM POSTGRE</div>
          </div>
          <div className="exp-middle">
            <FontAwesomeIcon icon={faGraduationCap} className="modal-icon" />
            <div className="timeline"></div>
          </div>
          <div className="exp-right">
            <div className="exp-subHeader">
              <h2>
                {exp.organization} - {exp.role_description.toUpperCase()}
              </h2>
            </div>
            <p>
              From <i>{exp.date_start}</i> to <i>{exp.date_end}</i>
            </p>
            <h3>Highlights</h3>
            <div className="exp-subcontent-item">
              <ul>
                {exp.role_details.map((ach, index) => (
                  <li key={index}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    )
        
  })

  const pagesMapped = pages.map((content) => {
    if (content.subDetails.length !== 0 && content.title === 'Education') {
      return (
        <div className="exp-content-item" key={content.role}>
          <div className="exp-left">
            <div className="time-tag">{content.dateStart}</div>
          </div>
          <div className="exp-middle">
            <FontAwesomeIcon icon={faGraduationCap} className="modal-icon" />
            <div className="timeline"></div>
          </div>
          <div className="exp-right">
            <div className="exp-subHeader">
              <h2>
                {content.organization} - {content.description.toUpperCase()}
              </h2>
            </div>
            <p>
              From <i>{content.dateStart}</i> to <i>{content.dateEnd}</i>
            </p>
            <h3>Highlights</h3>
            <div className="exp-subcontent-item">
              <ul>
                {content.subDetails.map((ach, index) => (
                  <li key={index}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (content.title === 'Education') {
      return (
        <div className="exp-content-item" key={content.role}>
          <div className="exp-left">
            <div className="time-tag">{content.dateStart}</div>
          </div>
          <div className="exp-middle">
            <FontAwesomeIcon icon={faGraduationCap} className="modal-icon" />
            <div className="timeline"></div>
          </div>
          <div className="exp-right">
            <div className="exp-subHeader">
              <h2>
                {content.organization} - {content.description.toUpperCase()}
              </h2>
            </div>
            <p>
              From <i>{content.dateStart}</i> to <i>{content.dateEnd}</i>
            </p>
          </div>
        </div>
      );
    } else if (content.title === 'Experience' && content.dateEnd === 'Now') {
      return (
        <div className="exp-content-item" key={content.role}>
          <div className="exp-left">
            <div className="time-tag">{content.dateStart}</div>
          </div>
          <div className="exp-middle">
            <FontAwesomeIcon icon={faUserTie} className="modal-icon" />
            <div className="timeline"></div>
          </div>
          <div className="exp-right">
            <div className="exp-subHeader">
              <h2>
                {content.organization} - {content.description.toUpperCase()}
              </h2>
            </div>
            <p>
              From <i>{content.dateStart}</i> and is <i>currently employed</i>            
            </p>
            <h3>Job Description</h3>
            <div className="exp-subcontent-item">
              <ul>
                {content.subDetails.map((ach, index) => (
                  <li key={index}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (content.title === 'Experience') {
      return (
        <div className="exp-content-item" key={content.role}>
          <div className="exp-left">
            <div className="time-tag">{content.dateStart}</div>
          </div>
          <div className="exp-middle">
            <FontAwesomeIcon icon={faUserTie} className="modal-icon" />
            <div className="timeline"></div>
          </div>
          <div className="exp-right">
            <div className="exp-subHeader">
              <h2>
                {content.organization} - {content.description.toUpperCase()}
              </h2>
            </div>
            <p>
              From <i>{content.dateStart}</i> to <i>{content.dateEnd}</i>
            </p>
            <h3>Job Description</h3>
            <div className="exp-subcontent-item">
              <ul>
                {content.subDetails.map((ach, index) => (
                  <li key={index}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
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
      <div className="exp-contents">{experiencesMapped}{pagesMapped}</div>
    </div>
  );
}
