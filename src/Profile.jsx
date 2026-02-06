import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faCertificate, faCog, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { supabase } from './supabase-client';
import Prompt from './Prompt';

export default function Profile({ closer }) {
  const [certs, setCerts] = useState([]);
  const [skills, setSkills] = useState([]);

  const [certsChecked, setCertsChecked] = useState(false);
  const [skillsChecked, setSkillsChecked] = useState(false);

  const [showPrompt, setShowPrompt] = useState(false);
  const [promptVisible, setPromptVisible] = useState(false);

  const [showSubOverlay, setShowSubOverlay] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [animationClass, setAnimationClass] = useState('');

  const [certificateImg, setCertificateImg] = useState('');
  const [alternativeImg, setAlternativeImg] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);

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

  const getCerts = async () => {
    const { error, data } = await supabase.from('certificates').select('*');

    if (!error && data) {
      setCerts(data);
    }

    setCertsChecked(true);
  };

  const getSkills = async () => {
    const { error, data } = await supabase.from('skills').select('*');

    if (!error && data) {
      setSkills(data);
    }

    setSkillsChecked(true);
  };

  useEffect(() => {
    getCerts();
    getSkills();
  }, []);

  useEffect(() => {
    if (!certsChecked || !skillsChecked) return;

    const shouldShow =
      certs.length === 0 || skills.length === 0;

    if (shouldShow) {
      setShowPrompt(true);
      setTimeout(() => setPromptVisible(true), 50);
    }
  }, [certsChecked, skillsChecked, certs.length, skills.length]);

  const closePrompt = () => {
    setPromptVisible(false);
    setTimeout(() => setShowPrompt(false), 300);
  };

  const certsMapped = certs.map((cert, index) => (
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
  ));

  const skillsMapped = skills.map((skill) => (
    <div className="skill-container" key={skill.id}>
      <img src={skill.image_reference} alt={skill.alternative} />
      <h3>{skill.alternative}</h3>
    </div>
  ));

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
                I am a <span style={{ color: '#cbac85' }}>backend-focused full-stack developer</span> with a degree in <span style={{ color: '#cbac85' }}>Computer Science</span>, a love for <span style={{ color: '#cbac85' }}>clean code</span>, and a track record of building practical, <span style={{ color: '#cbac85' }}>user-focused web solutions</span>.
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

      {showPrompt && (
        <div className={`prompt-overlay ${promptVisible ? 'fade-in' : 'fade-out'}`}>
          <Prompt closer={closePrompt} autoClose={5000} />
        </div>
      )}
    </div>
  );
}
