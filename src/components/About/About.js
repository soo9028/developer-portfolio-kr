import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className='about'
      id='about'
      style={{ backgroundColor: theme.secondary }}
    >
      <div className='line-styling'>
        <div
          className='style-circle'
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className='style-circle'
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className='style-line'
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className='about-body'>
        <div className='about-description'>
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {aboutData.description1}
            <br />
            <br />
            안저 데이터에 기반한 AI를 활용한 시력교정 솔루션을 개발하는 업체에
            재직중입니다. 뿐만 아니라 어린이들을 위한 근시 예측 플랫폼도
            개발중에 있으며, 이외에도 다양한 <br />
            프로젝트를 맡고 있습니다. 현재 업계 흐름에 따라 타입스크립트와
            파이썬도 공부중에 있으며 취미는 운동과 유투브에 직접 번역한 가사
            영상을 올리는 것입니다.
          </p>
        </div>
        <div className='about-img'>
          <img
            src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default About;
