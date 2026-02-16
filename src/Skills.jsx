import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { supabase } from './supabase-client';

export default function Skills() {
  const [certs, setCerts] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certsChecked, setCertsChecked] = useState(false);
  const [skillsChecked, setSkillsChecked] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);


  useEffect(() => {
    if (activeOverlay) {
      setShowSubOverlay(true);
      setAnimationClass('slide-up');
    }
  }, [activeOverlay]);

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
      <div className="prof-container">
        <div className="skills-container">
          <div className="skills-header">
            <FontAwesomeIcon icon={faCertificate} className="cog-icon" />
            <h2>CERTIFICATES</h2>
            <FontAwesomeIcon icon={faCertificate} className="cog-icon" />
          </div>
          <div className="certs-gallery">{skillsMapped}</div>
        </div>
      </div>
    </div>
  );
}
