import React from 'react'
import ProfilePicture from '../Images/Profile.jpg'
import githubLogo from '../Images/github-logo.png'; 
import linkedinLogo from '../Images/linkedin-logo.png';
import twitterLogo from '../Images/twitter-logo.png';
import emailIcon from '../Images/email-logo.png';
import Resume from '../Components/VedantYelsangikar_Resume.pdf'

export default function Profile(){
    const myName = 'Vedant Yelsangikar';
    const myPictureUrl = ProfilePicture;
    const downloadResume = () => {
      const fileUrl = Resume; // Replace with the actual path to your resume file
      const link = document.createElement('a');
  
      link.href = fileUrl;
      link.download = 'Vedant_Yelsangikar_resume.pdf'; // You can customize the downloaded file name
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <div className='profile-bio' id='home'>
    <div className="portfolio-container">
      <div className="profile-section">
        <img src={myPictureUrl} alt="Profile" className="profile-picture" />
      </div>
      <div className='bio'>
        <h1 className='name'>Hi, I'm {myName}</h1>
        <h1 className='role'>I'm a Full Stack Developer</h1>
        <h4 className='coffee-description'>You either see me drinking Coffee or see me holding one ☕️</h4>
        <button class="btn-82" onClick={downloadResume}><span>Download Resume</span></button>
      </div>
    </div>
    <div className='social-links'>
        <a href="https://github.com/Vedant09" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" />
        </a>

        <a href="https://www.linkedin.com/in/vedant-yelsangikar" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn Logo" />
        </a>

        <a href="https://twitter.com/vedantvy" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter Logo" />
        </a>

        <a href="mailto:your.vedantvy98@gmail.com">
          <img src={emailIcon} alt="Email Icon" />
        </a>
      </div>
    </div>
  );
}