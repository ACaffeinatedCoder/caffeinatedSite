import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {
  faCertificate,
  faCog,
  faMugHot,
} from '@fortawesome/free-solid-svg-icons';
import { supabase } from './supabase-client';
import Prompt from './Prompt';

export default function Profile({ closer }) {
  const [certs, setCerts] = useState([]);
  const [showSubOverlay, setShowSubOverlay] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [animationClass, setAnimationClass] = useState('');
  const [prompt, setPrompt] = useState(false)

  useEffect(() => {
    if (activeOverlay) {
      setShowSubOverlay(true);
      setAnimationClass('slide-up');
    }
  }, [activeOverlay]);

  const closeOverlay = () => {
    setAnimationClass('slide-down');
    setTimeout(() => {
      setShowSubOverlay(false);
      setActiveOverlay(null);
    }, 600);
  };

  const [certificateImg, setCertificateImg] = useState('');
  const [alternativeImg, setAlternativeImg] = useState('');

  const getCerts = async () => {
    const { error, data } = await supabase.from('certificates').select('*');

    if (error) {
      console.error(error.message);
      setPrompt(false)
      return;
    } else {
      setCerts(data);
      setPrompt(true)
    }
  };

  useEffect(() => {
    getCerts();
    getSkills();
  }, []);

  const certsMapped = certs.map((cert, index) => {
    return (
      <div
        className="cert-container"
        key={index}
        onClick={() => {
          setActiveOverlay('open');
          setCertificateImg(cert.image_reference);
          setAlternativeImg(cert.alternative);
        }}>
        <h3>{cert.alternative}</h3>
      </div>
    );
  });

  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    const { error, data } = await supabase.from('skills').select('*');

    if (error) {
      console.error(error.message);
      return;
    } else {
      setSkills(data);
    }
  };

  const skillsMapped = skills.map((skill) => {
    return (
      <div className="skill-container" key={skill.id}>
        <img src={skill.image_reference} alt={skill.alternative} />
        <h3>{skill.alternative}</h3>
      </div>
    );
  });

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="exp-container">
      <div className="modal-header">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>

      {showSubOverlay && (
        <div
          className={`profile-overlay ${animationClass}`}
          onClick={(e) => {
            e.stopPropagation();
            closeOverlay();
          }}>
          <div
            className="image-container"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}>
            <img
              src={certificateImg}
              alt={alternativeImg}
              className={isZoomed ? 'zoomed' : ''}
            />
          </div>
        </div>
      )}
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
                <span style={{ color: '#61DAFB', fontWeight: 'bold' }}>
                  ReactJS
                </span>
                ,{' '}
                <span style={{ color: '#FFA726', fontWeight: 'bold' }}>
                  Firebase
                </span>
                ,{' '}
                <span style={{ color: '#B388EB', fontWeight: 'bold' }}>C#</span>
                ,{' '}
                <span style={{ color: '#FFD43B', fontWeight: 'bold' }}>
                  Python
                </span>
                ,{' '}
                <span style={{ color: '#B0BEC5', fontWeight: 'bold' }}>
                  SQL
                </span>
                , and data tools like{' '}
                <span style={{ color: '#33C481', fontWeight: 'bold' }}>
                  Microsoft Excel
                </span>
                . Beyond coding, there's experience{' '}
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
        <div className="skills-container">
          <div className="skills-header">
            <FontAwesomeIcon icon={faCog} className="cog-icon" />
            <h2>SKILLS</h2>
            <FontAwesomeIcon icon={faCog} className="cog-icon" />
          </div>
          <div className="skills-gallery">{skillsMapped}</div>
        </div>
        <div className="skills-container">
          <div className="skills-header">
            <FontAwesomeIcon icon={faCertificate} className="cog-icon" />
            <h2>CERTIFICATES</h2>
            <FontAwesomeIcon icon={faCertificate} className="cog-icon" />
          </div>
          <div className="certs-gallery">{certsMapped}</div>
        </div>
      </div>
      
      {!prompt ? (
        <div className='prompt-overlay'>
          <Prompt closer={setPrompt}/>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
