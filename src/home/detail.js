import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './details.css';
import me1 from '../images/me1'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function Details() { 
    const words = ['Mnded', 'Frontend Developer', 'Coder'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const handleCall = () => {
        window.location.href = 'tel:7760244373';
    };
    const handleEmail = () => {
        window.location.href = 'mailto:vinayakavse@gmail.com';
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='text-center'>
            <div className='row '>
                <div className='col-6' sx={{ textAlign: 'left', marginLeft: '40px' }}>
                    <h1 className='name' ><b>VINAYAKA E</b></h1> <br /><br />
                    <span className="cfd">Creative</span>
                    <span className="cd-words-wrapper cfd ">
                        <b className={currentWordIndex === 0 ? 'is-visible' : 'b'} style={{ color: 'white' }}>Minded</b>
                        <b className={currentWordIndex === 1 ? 'is-visible' : 'b'} style={{ color: 'white' }}>Developer</b>
                        <b className={currentWordIndex === 2 ? 'is-visible' : 'b'} style={{ color: 'white' }}>Coder</b>
                    </span><br />

                    <div className="card animated-gradient" style={{ backgroundColor: '#1d1919', marginLeft: '6rem', marginRight: '13rem' }}>
                        <div className="card-body">
                            <h5 className="card-text"><b>
                                <PhoneEnabledIcon style={{ color: '#rgb(40, 40, 40)', cursor: 'pointer' }} onClick={handleCall} />
                                <span style={{ color: 'rgb(214, 248, 240)', cursor: 'pointer' }}> Mob : </span>
                                <span style={{ cursor: 'pointer', color: 'white' }} onClick={handleCall}>7760244373</span></b>
                            </h5>

                            <h5 className="card-text"><b>
                                <EmailIcon style={{ color: '#rgb(40, 40, 40)', cursor: 'pointer' }} onClick={handleEmail} />
                                <span style={{ color: 'rgb(214, 248, 240)', cursor: 'pointer' }}> Mail : </span>
                                <span style={{ cursor: 'pointer', color: 'white' }} onClick={handleEmail}>vinayakavse@gmail.com</span></b>
                            </h5>

                            <h5 className="card-text"><b>
                                <a href='https://www.linkedin.com/in/vinayaka-engalagondi-8754a5280' style={{ textDecoration: 'none', color: 'white' }}>
                                    <LinkedInIcon style={{ color: '#1d1c1c', cursor: 'pointer' }} />
                                    <span style={{ color: 'rgb(214, 248, 240)', cursor: 'pointer' }}> LinkedIn : </span>
                                    <span style={{ cursor: 'pointer' }}>Vinayaka Engalagondi</span>
                                </a></b>
                            </h5>

                            <h5 className="card-text"><b>
                                <a href='https://goo.gl/maps/yW5ACueiDL2qxz1N9' style={{ textDecoration: 'none', color: 'white' }}>
                                    <FmdGoodOutlinedIcon style={{ color: '#1d1c1c', cursor: 'pointer' }} />
                                    <span style={{ color: 'rgb(214, 248, 240)', cursor: 'pointer' }}> Address : </span>
                                    <span style={{ cursor: 'pointer' }}>Doddikoppa, Shivamogga</span>
                                </a></b>
                            </h5>
                        </div>
                    </div>

                </div>
                <div className='col-1' style={{ borderRadius: '20px', marginLeft: '-40px' }}>
                    <img src={me1} className='width' style={{boxShadow: '0 0 1vw .3vw rgb(206, 177, 177)',}}></img>
                </div>
            </div>

            <div class="header__title">

            </div>


        </div>
    );
}

export default Details;
