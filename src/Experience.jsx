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
        ]
    },{
      title: 'Education',
      description: 'Attended College',
      organization: 'Siena College of Taytay',
      course: 'Computer Science',
      achievements: [
        'Best College Thesis',
      ],
    },
    {
      title: 'Experience',
      description: 'Part-time Course Instructor',
      organization: 'Siena College of Taytay',
      role: 'Part-time Course Instructor',
      responsibilities: [
        'Teaching BSCS students in Basic Web Development',
      ],
    },
  ]);

  const pagesMapped = pages.map((content) => {
    if (content.title === 'Education') {
      return (
        <div className="exp-content-item" key={content.course}>
          <h2>{content.title}</h2>
          <p>
            <i>
              {content.description} at {content.organization} as a{' '}
              {content.course} student
            </i>
          </p>
          <div>
            <h3>Achievements</h3>
            <ul>
              {content.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
            ))}
            </ul>
          </div>
        </div>
      );
    } else if (content.title === 'Experience') {
      return (
        <div className="exp-content-item" key={content.role}>
          <h2>{content.title}</h2>
          <p>
            <i>
              {content.description} at {content.organization} as a{' '}
              {content.role}
            </i>
          </p>
                <div>
                    <h3>Responsibilities</h3>
                    <ul>
                        {content.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>
                </div>
        </div>
      );
    } else if (content.title === 'Certifications') {
        return (
            <div className="exp-content-item" key={content.title}>
                <h2>{content.title}</h2>
                <div>
                    <h3>List of Certificates</h3>
                    <ul>
                        {content.certificates.map((certs, index) => (
                            <li key={index}>{certs}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
  });

  return (
    <div className="exp-container">
      <div className="modal-header">
        <h2>
          <i>So far</i>, I have...
        </h2>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer(false)}
        />
      </div>
      <div className="exp-contents">{pagesMapped}</div>
    </div>
  );
}
