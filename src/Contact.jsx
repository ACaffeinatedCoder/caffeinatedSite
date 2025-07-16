import {
  faCircleXmark,
  faEnvelope,
  faLocationDot,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Contact({ closer }) {
  const copyToClipboard = (text, alertMessage) => {
    setCopied(alertMessage);
    navigator.clipboard.writeText(text);
  };

  const [copied, setCopied] = useState('');

  function showCopyToast() {
    const toast = document.getElementById('copy-toast');
    if (!toast) return;

    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hidden');
    }, 2000);
  }

  return (
    <div className="cont-container">
      <div className="modal-header">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-closer"
          onClick={() => closer()}
        />
      </div>
      <div className="cont-subcontainer">
        <div className="cont-subheader">
          <div className="header-line"></div>
          <h2>GET IN TOUCH</h2>
          <div className="header-line"></div>
        </div>
        <div className="contact-item-container">
          <div
            className="contact-item"
            onClick={() => {
              copyToClipboard('caseyfrancisco13@gmail.com', 'email');
              showCopyToast();
            }}>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>caseyfrancisco13@gmail.com</p>
          </div>
          <div
            className="contact-item"
            onClick={() => {
              copyToClipboard('(+63) 999-8497301', 'mobile no');
              showCopyToast();
            }}>
            <FontAwesomeIcon icon={faMobile} className="contact-icon" />
            <p>(+63) 999-8497301</p>
          </div>
          <div
            className="contact-item"
            onClick={() => {
              copyToClipboard('Rizal, Philippines', 'address');
              showCopyToast();
            }}>
            <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
            <p>Rizal, Philippines</p>
          </div>
          <div
            className="contact-item"
            onClick={() => {
              copyToClipboard(
                'https://www.linkedin.com/in/casey-christian-francisco-92b9701bb/',
                'LinkedIn url'
              );
              showCopyToast();
            }}>
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <p>LinkedIn</p>
          </div>
          <div
            className="contact-item"
            onClick={() => {
              copyToClipboard(
                'https://github.com/ACaffeinatedCoder',
                'Github profile url'
              );
              showCopyToast();
            }}>
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <p>Github</p>
          </div>
        </div>

        <div className="footer-line"></div>
      </div>
      <div className="palette-container">
        <h3 style={{ marginRight: '10px', color: 'black' }}>
          Website Palette:
        </h3>
        {[
          '#3e1e04',
          '#462003',
          '#6a3005',
          '#965015',
          '#c4923e',
          '#cbac85',
          '#ffd6a3',
          '#ffffff',
        ].map((color, index) => {
          const getTextColor = (bgColor) => {
            const r = parseInt(bgColor.slice(1, 3), 16);
            const g = parseInt(bgColor.slice(3, 5), 16);
            const b = parseInt(bgColor.slice(5, 7), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness < 128 ? '#ffffff' : '#000000';
          };

          const textColor = getTextColor(color);

          return (
            <div
              key={index}
              className="my-rectangle"
              style={{
                backgroundColor: color,
                color: textColor,
                fontWeight: 'bold',
              }}>
              <p>{color}</p>
            </div>
          );
        })}
      </div>
      <div id="copy-toast" className="copy-toast hidden">
        Copied <b>{copied}</b> to clipboard!
      </div>
    </div>
  );
}
