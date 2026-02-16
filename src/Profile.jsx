import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faCertificate, faCode } from '@fortawesome/free-solid-svg-icons';
import { supabase } from './supabase-client';

export default function Profile() {
  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    const { error, data } = await supabase.from('skills').select('*');

    if (!error && data) {
      setSkills(data);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  const skillsMapped = skills.map((skill) => (
    <div className="skill-card" key={skill.id}>
      <img src={skill.image_reference} alt={skill.alternative} />
      <h3>{skill.alternative}</h3>
    </div>
  ));

  return (
    <div className="exp-container">
      <div className="prof-container">
        {/* ===== ABOUT SECTION ===== */}
        <div className="about-container">
          <div className="home-content">
            <h1>Hi, I'm Casey Francisco</h1>
            <p>
              <i>
                Systems-oriented IT professional with a background in web
                development, data analysis, quality assurance, and technical instruction.
              </i>
            </p>
          </div>

          <div className="about-subcontainer">
            <div className="about-text">
              <p>
                I am a <span className="accent">Computer Science graduate</span>{' '}
                with experience in{' '}
                <span className="accent">web development</span>,
                <span className="accent"> data analysis</span>,
                <span className="accent"> software quality assurance</span>, and
                <span className="accent"> system analysis</span>. I enjoy
                breaking down complex systems into clear, testable components
                and ensuring that applications function as intended.
              </p>

              <p>
                With a strong focus on{' '}
                <span className="accent">structured problem-solving</span>,
                <span className="accent"> documentation</span>, and
                <span className="accent"> continuous improvement</span>, I aim
                to build and validate reliable software solutions that deliver
                real value to users.
              </p>
            </div>
          </div>
        </div>

        {/* ===== SKILLS SECTION ===== */}
        <div className="skills-container">
          <div className="skills-header">
            <FontAwesomeIcon icon={faCode} className="cog-icon" />
            <h2>SKILLS</h2>
            <FontAwesomeIcon icon={faCode} className="cog-icon" />
          </div>

          <div className="skills-gallery">{skillsMapped}</div>
        </div>
      </div>
    </div>
  );
}
