import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './Experience.css';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faCog, faMugHot } from '@fortawesome/free-solid-svg-icons';

export default function Profile({ closer }) {
  const [profileStatement, setProfileStatement] = useState('');
  const [certs, setCerts] = useState([
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
  ])
  const [skills, setSkills] = useState([
    {id: 'Python-skill', desc: 'Python', imageref: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg', altref: 'Python Icon'},
    { id: 'CSharp-skill', desc: 'C#', imageref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/256px-Logo_C_sharp.svg.png?20221121173824', altref: 'C# Icon' },
    { id: 'Java-skill', desc: 'Java', imageref: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png', altref: 'Java Icon' },
    { id: 'JavaScript-skill', desc: 'JavaScript', imageref: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', altref: 'JavaScript Icon' },
    { id: 'ReactJS-skill', desc: 'ReactJS', imageref: 'https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg', altref: 'React Icon' },
    { id: 'ReactNative-skill', desc: 'React Native', imageref: 'https://images.seeklogo.com/logo-png/45/1/expo-go-app-logo-png_seeklogo-457073.png', altref: 'React Native Icon' },
    { id: 'SQL-skill', desc: 'SQL', imageref: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/120px-MySQL_logo.svg.png', altref: 'SQL Icon' },
    { id: 'Firebase-skill', desc: 'Firebase', imageref: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png', altref: 'Firebase Icon' },
    { id: 'Excel-skill', desc: 'Microsoft Excel', imageref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png', altref: 'Excel Icon' },
    { id: 'Word-skill', desc: 'Microsoft Word', imageref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png', altref: 'Word Icon' },
    { id: 'PowerPoint-skill', desc: 'Microsoft PowerPoint', imageref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png', altref: 'PowerPoint Icon' }
  ])
  const skillsMapped = skills.map((skill) => {
    return (
    <div className='skill-container' key={skill.id}>
      <img src={skill.imageref} alt={skill.altref}/>
      <h3>{skill.desc}</h3>
    </div>
  )})

  return (
    <div className="exp-container">
      <div className="modal-header">
        <h1></h1>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>
      <div className="prof-container">
        <div className="about-container">
          <h1>About</h1>
          <div className="about-subcontainer">
            <FontAwesomeIcon icon={faMugHot} className="mug-icon" />
            <div className="about-text">
              <p>
                I am a{' '}
                <span style={{ color: '#cbac85' }}>
                  backend-focused full-stack developer
                </span>{' '}
                with a degree in{' '}
                <span style={{ color: '#cbac85' }}>Computer Science</span>, a
                love for <span style={{ color: '#cbac85' }}>clean code</span>,
                and a track record of building practical,{' '}
                <span style={{ color: '#cbac85' }}>
                  user-focused web solutions
                </span>
                . Technical experience includes{' '}
                <span style={{ color: '#61DAFB', fontWeight: 'bold' }}>ReactJS</span>,{' '}
                <span style={{ color: '#FFA726', fontWeight: 'bold' }}>Firebase</span>,{' '}
                <span style={{ color: '#B388EB', fontWeight: 'bold' }}>C#</span>,{' '}
                <span style={{ color: '#FFD43B', fontWeight: 'bold' }}>Python</span>,{' '}
                <span style={{ color: '#B0BEC5', fontWeight: 'bold' }}>SQL</span>, and data tools
                like <span style={{ color: '#33C481', fontWeight: 'bold' }}>Microsoft Excel</span>.
                Beyond coding, there's experience{' '}
                <span style={{ color: '#cbac85' }}>
                  teaching programming concepts
                </span>{' '}
                and continuously{' '}
                <span style={{ color: '#cbac85' }}>
                  pursuing certifications
                </span>{' '}
                to deepen technical and analytical skills. Whether deploying
                cloud-based systems, debugging APIs, or helping others learn,
                there's a{' '}
                <span style={{ color: '#cbac85' }}>strong work ethic</span>,{' '}
                <span style={{ color: '#cbac85' }}>adaptability</span>, and a{' '}
                <span style={{ color: '#cbac85' }}>
                  mindset geared toward continuous improvement
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className='skills-container'>
          <div className='skills-header'>
            <FontAwesomeIcon icon={faCog} className="cog-icon" />
            <h2>SKILLS</h2>
            <FontAwesomeIcon icon={faCog} className="cog-icon" />
          </div>
          <div className='skills-gallery'>
            {skillsMapped}
          </div>
        </div>
      </div>
    </div>
  );
}
