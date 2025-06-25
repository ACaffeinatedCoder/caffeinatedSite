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
    },
  ]);

  const [contentSelected, setContent] = useState('');

  const pagesMapped = pages.map((content) => {
    if (content.title === 'Education' && contentSelected === 'Education') {
      return (
        <div className="exp-content-item" key={content.course}>
          <h2>
            {content.organization} - {content.description}
          </h2>
          <p>
            {content.course} - From <i>{content.dateStart}</i> to{' '}
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
      contentSelected === 'Experience'
    ) {
      return (
        <div className="exp-content-item" key={content.role}>
          <h2>{content.title}</h2>
          <p>
            <i>
              {content.description} at {content.organization} as a{' '}
              {content.role}
            </i>
          </p>
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
          <h2>{content.title}</h2>
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
  });

  return (
    <div className="exp-container">
      <div className="modal-header">
        <h2>
          My{' '}
          <span
            style={{ color: '#6a3005' }}
            onClick={() => setContent('Education')}>
            Education
          </span>{' '}
          & <span style={{ color: '#6a3005' }}>Work Experience</span>
        </h2>
        {contentSelected}
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
