import React, { useState } from 'react';
import './Academics.css'
import pes from '../images/pes.png'
import ten from '../images/10.png'

function Academics() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section>
      <div className="operations ">
          <h2 style={{display:'flex', justifyContent:'center', paddingRight:'1.5rem', color:'rgb(126, 137, 139)'}}><b>ACADEMICS</b></h2>
        <div className='pad1'>
          <div>
            <button
              className={`btn22 operations__tab ${activeTab === 1 ? 'operations__tab--active' : ''
                }`}
              onClick={() => handleTabClick(1)}
              style={{ color: 'rgb(183, 157, 59)' }}>
              <span>01</span>ENGINEERING
            </button>
          </div>

          <div>
            <button
              className={`btn22 operations__tab ${activeTab === 2 ? 'operations__tab--active' : ''
                }`}
              onClick={() => handleTabClick(2)}
              style={{ color: '#5ec576' }}>
              <span>02</span>SSLC (10)
            </button>
          </div>

          <div>
            <button
              className={`btn22 operations__tab ${activeTab === 3 ? 'operations__tab--active' : ''
                }`}
              onClick={() => handleTabClick(3)}
              style={{ color: '#ff585f' }}>
              <span >01</span>PUC (10+2)
            </button>
          </div>
        </div>

        <div style={{ boxShadow: '0 0 1vw .3vw rgb(255, 206, 19)', width: '80%', margin: 'auto', color:'rgb(183, 157, 59)' }} className={`operations__content ${activeTab === 1 ? 'operations__content--active' : ''}`}>
          <div className="operations__icon operations__icon--1">
            <img src={pes} style={{ width: '10rem' }}></img>
          </div>
          <h2 style={{ marginTop: '1rem' }}>
            <b>PES INSTITUTE OF TECHNOLOGY AND MANAGEMENT, SHIVAMOGGA.</b>
          </h2>
          <p>
            <b>CIVIL Engineering</b>
          </p>
          <p>
            <b>Completed with <span class="operations__header">82%</span>, in Aug-2022</b>
          </p>
          <p>
            <b>Board: Visvesvaraya Technological University</b>
          </p>
        </div>

        <div style={{ boxShadow: '0 0 1vw .3vw #5ec576', width: '80%', margin: 'auto', color:'#5ec576' }} className={`operations__content ${activeTab === 2 ? 'operations__content--active' : ''}`}>
          <div className="operations__icon operations__icon--1">
            <img src={ten} style={{ width: '7.5rem' }}></img>
          </div>
          <h2 style={{ marginTop: '1rem' }}>
            <b>GOVERNMENT PU COLLEGE, ANAVATTI, SHIVAMOGGA.</b>
          </h2>
          <p>
            <b>P U College (PCMB) </b>
          </p>
          <p>
            <b>Completed with <span class="operations__header">75%</span>, in Apr-2018 </b>
          </p>
          <p>
            <b>Board: Karnataka Pre University Board </b>
          </p>
        </div>

        <div style={{ boxShadow: '0 0 1vw .3vw #ff585f', width: '80%', margin: 'auto', color:'#ff585f' }} className={`operations__content ${activeTab === 3 ? 'operations__content--active' : ''}`}>
          <div className="operations__icon operations__icon--1">
            <img src={ten} style={{ width: '7.5rem' }}></img>
          </div>
          <h2 style={{ marginTop: '1rem' }}>
            <b>GOVERNMENT JUNIOR COLLEGE, ANAVATTI, SHIVAMOGGA.</b>
          </h2>
          <p>
            <b>Secondary School Leaving Certificate</b>
          </p>
          <p>
            <b>Completed with <span class="operations__header">87%</span>, in May-2016 </b>
          </p>
          <p>
            <b>Board: Karnataka State Board </b>
          </p>
        </div>
      </div>

    </section>
  );
}

export default Academics;
