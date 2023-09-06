import React from 'react'
import './About.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import about2 from '../images/ab2.jpg'

function About() {
  return (
    <div className='text-color row mt-4'>
      <div className='col-8 pad '>
        <h3 className='charact'><b>CHARACTER</b></h3>
        <h5 className='abt-text'>Intelligent and Quick Learner. </h5>
      </div>
      <div className='row' style={{ marginLeft: '3rem' }}>
        <div className='col-5'>
          <img src={about2} className='im-width' style={{boxShadow: '0 0 1vw .1vw white',}} />
        </div>
        <div className='col-7'>
          <h3><b style={{ color: '#feca57' }}>Peace Person.</b></h3>
          <h5><b style={{ color: 'rgb(162, 178, 197)' }}>Smiley face with Kind hearted. </b></h5> <br />
          <h5><b style={{ color: 'rgb(162, 178, 197)' }}>An enthusiastic and adaptive individual with a background in agriculture.</b></h5> <br />
          <h5><b style={{ color: 'rgb(162, 178, 197)' }}>
            Possessing a kind-hearted and empathetic nature that enhances teamwork and communication.
            Eager to apply my knowledge and passion to contribute to meaningful projects.</b></h5> <br />
          <h5><b style={{ color: 'rgb(162, 178, 197)' }}>Eager to learn new technologies and methodologies and able to produce the best results in pressure situations.  </b></h5>

        </div>

      </div>
    </div>
  )
}

export default About