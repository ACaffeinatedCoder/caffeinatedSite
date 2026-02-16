import './Certificates.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { supabase } from './supabase-client';
import Prompt from './Prompt';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

export default function Certificates() {
  const [certs, setCerts] = useState([]);
  const [certsChecked, setCertsChecked] = useState(false);
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

  const getCerts = async () => {
    const { error, data } = await supabase.from('certificates').select('*');

    if (!error && data) {
      setCerts(data);
    }

    setCertsChecked(true);
  };

  const closeOverlay = () => {
    setAnimationClass('slide-down');
    setTimeout(() => {
      setShowSubOverlay(false);
      setActiveOverlay(null);
    }, 600);
  };

  useEffect(() => {
    getCerts();
  }, []);

  useEffect(() => {
    if (!certsChecked) return;

    const shouldShow = certs.length === 0;

    if (shouldShow) {
      setShowPrompt(true);
      setTimeout(() => setPromptVisible(true), 50);
    }
  }, [certsChecked, certs.length]);

  const certsMapped = certs.map((cert, index) => (
    <div
      className="certificate-card"
      key={index}
      onClick={() => {
        setActiveOverlay('open');
        setCertificateImg(cert.image_reference);
        setAlternativeImg(cert.alternative);
      }}>
      <div className="certificate-thumb">
        <img src={cert.image_reference} alt={cert.alternative} />
      </div>

      <div className="certificate-info">
        <h3>{cert.alternative}</h3>
      </div>
    </div>
  ));

  return (
    <div className="exp-container">
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
        <div className="skills-container">
          <div className="skills-header">
            <FontAwesomeIcon icon={faCertificate} className="cog-icon" />
            <h2>CERTIFICATES</h2>
            <FontAwesomeIcon icon={faCertificate} className="cog-icon" />
          </div>
          <div className="skills-gallery">{certsMapped}</div>
        </div>
      </div>
    </div>
  );
}
