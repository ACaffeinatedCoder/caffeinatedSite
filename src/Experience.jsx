/**
 * Experience Page:
 *  - Academic Records
 *  - CV?
 *  - Certificates
 *
 */
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCertificate, faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons';

/**
 * Map Contents
 *  - Uniform Look
 *  -- Education/Work Experience
 *  --- Details
 */

export default function Experience({ closer }) {
  const [pages, setPages] = useState([
    {
      title: 'Certifications',
      certificates: [
        'Completer of Computer Systems Servicing NCII Program of TESDA',
        'Attendee of the webinar entitled Understanding Security Operations Center by the Department of Information and Communications Technology Region IV-A Cybersecurity Bureau',
        'Attendee of the LUVOPSEA Research Seminar and Workshop entitled Artificial Intelligence in Research for Students and Teachers',
        'Attendee of the PSITE-CALABARZON Data Science Frontiers: Harnessing NLP and Generative AI for IT Education Advancement',
        'Attendee of the PSITE-NCR’s Monthly Seminar-Workshop entitled STUDENT CONGRESS 2024 INNOVATING WITH INTELLIGENCE: AI ETHICS & BIG DATA TRANSPARENCY',
        'Attendee of EROVOUTIKA’s Seminar and Workshop in ROBOTICS AND AUTOMATION',
        'Completer of the twenty-hour hybrid training on Quality Management Systems Standards in Digital Service Delivery by the ICT Literacy and Competency Development Bureau of the DICT Region IV-A (CALABARZON) Rizal',
        'Completer of the Data Analytics Bootcamp by Alexander Freberg',
        'Completer of Fundamentals of Analytics on AWS Part 1 and 2',
        'Completer of Foundational C# with Microsoft',
        'Completer of Scrum Agile Master by Simplilearn',
        'Completer of An Introduction to JIRA Architecture by Alison',
        'Completer of Anti-Money Laundering and Customer Verification Training by Alison',
        'Career Service Examination - Pen and Paper Test (Professional Level)',
      ],
    },
    {
      title: 'Education',
      description: 'College',
      organization: 'Siena College of Taytay',
      course: 'Computer Science',
      dateStart: 'August 2020',
      dateEnd: 'May 2024',
      achievements: [
        'Albertus Magnus Award',
        'Best College Thesis',
        "Dean's Lister",
      ],
    },
    {
      title: 'Experience',
      description: 'Part-time Course Instructor',
      organization: 'Siena College of Taytay',
      role: 'Part-time Course Instructor',
      responsibilities: [
        'Teaching BSCS and BSIT students in Data Analysis with Python Programming',
        'Teaching BSIT students in Systems Administration',
        'Teaching BSCS students in Basic Web Development',
        'Teaching BSIT students in Information Assurance and Security',
      ],
      dateStart: 'August 2024',
      dateEnd: 'Now',
    },
    {
      title: 'Experience',
      description: 'Operations Support Analyst',
      organization: 'Netzwelt, Inc.',
      role: 'Operations Support Analyst',
      responsibilities: [
        'Team & Customer Communication: Coordinate with colleagues daily via Teams or Zoom, and follow up with customers through email or phone regarding claims and inquiries.',
        'Claim Validation & Support: Validate customer claims based on promotion mechanics and handle inquiries received through the support mailbox.',
        'Process Improvement: Join process analysis meetings, identify areas for improvement, and maintain a strong understanding of internal workflows.',
      ],
      dateStart: 'March 2025',
      dateEnd: 'May 2025',
    },
  ]);

  const [contentSelected, setContent] = useState('');

  const pagesMapped = pages.map((content) => {
    if (content.title === 'Education' && contentSelected === 'Education') {
      return (
        <div className="exp-content-item" key={content.course}>
          <h2>
            {content.organization} - {content.description.toUpperCase()}
          </h2>
          <p>
            {content.course.toUpperCase()} - From <i>{content.dateStart}</i> to{' '}
            <i>{content.dateEnd}</i>
          </p>
          <h3>Achievements</h3>
          <div className="exp-subcontent-item">
            <ul>
              {content.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (
      content.title === 'Experience' &&
      contentSelected === 'Experience' && content.dateEnd === 'Now'
    ) {
      return (
        <div className="exp-content-item" key={content.role}>
          <h2>{content.role.toUpperCase()}</h2>
          <div style={{flexDirection: 'column'}}>
            <p>
              <i>
                Employed at {content.organization} as a{' '}
                {content.role}
              </i>
            </p>
            <p>
              From <i>{content.dateStart}</i> and is <i>currently employed</i> 
            </p>
          </div>
          <h3>Responsibilities</h3>
          <div className="exp-subcontent-item">
            <ul>
              {content.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (
      content.title === 'Experience' &&
      contentSelected === 'Experience' && content.dateEnd !== 'Now'
    ) {
      return (
        <div className="exp-content-item" key={content.role}>
          <h2>{content.role.toUpperCase()}</h2>
          <div style={{flexDirection: 'column'}}>
            <p>
              <i>
                Employed at {content.organization} as a{' '}
                {content.role}
              </i>
            </p>
            <p>
              From <i>{content.dateStart}</i> up until{' '}<i>{content.dateEnd}</i> 
            </p>
          </div>
          <h3>Responsibilities</h3>
          <div className="exp-subcontent-item">
            <ul>
              {content.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (
      content.title === 'Certifications' &&
      contentSelected === 'Certifications'
    ) {
      return (
        <div className="exp-content-item" key={content.title}>
          <h2>{content.title.toUpperCase()}</h2>
          <h3>List of Certificates</h3>
          <div className="exp-subcontent-item">
            <ul>
              {content.certificates.map((certs, index) => (
                <li key={index}>{certs}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return null
  });

  return (
    <div className="exp-container">
      <div className="modal-header">
        <div style={{ gap: '1rem', display: 'flex', flexDirection: 'row'}}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={`modal-icon ${contentSelected === 'Education' ? 'selected' : ''}`}
              onClick={() => setContent('Education')}
          />
          <FontAwesomeIcon
            icon={faUserTie}
            className={`modal-icon ${contentSelected === 'Experience' ? 'selected' : ''}`}
              onClick={() => setContent('Experience')}
          />
          <FontAwesomeIcon
            icon={faCertificate}
            className={`modal-icon ${contentSelected === 'Certifications' ? 'selected' : ''}`}
              onClick={() => setContent('Certifications')}
          />
        </div>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>
      <div className="exp-contents">{pagesMapped}</div>
    </div>
  );
}
