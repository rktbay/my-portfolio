import React, {useState, useEffect} from 'react';
import './css/main.css';
import linkedin from './img/linkedin.png' 
import gmail from './img/gmail.png' 
import phone from './img/phone.png' 
import pdf from './files/BabaylanMarkDaniel.pdf';
import docx from './files/BabaylanMarkDaniel.docx';

const Main = () => {
    const [msg, setMsg] = useState('stuff');
    const [cvFormat, setCvFormat] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const copyGmail = () => {
        navigator.clipboard.writeText('matmatmark@gmail.com');
        setMsg('Email');
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 1100)
    }
    const copyPhone = () => {
        navigator.clipboard.writeText('09270815174');
        setMsg('Phone number');
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 1100)
    }

    const hidden = {
        visibility: 'hidden',
        opacity: '0',
        transition: 'visibility 0s linear 0.33s, opacity 0.33s linear'
    };
    const shown = {
        visibility: 'visible',
        opacity: '1',
        transitionDelay: '0s'
    };

    const handleCV = (e) => {
        if(e.target.value == 'pdf'){
            setCvFormat(true);
        }else if(e.target.value == 'docx'){
            setCvFormat(false);
        }
    }

    return (
        <>
            <nav className="navbar">
                   <ul>
                       <li><a href="https://www.linkedin.com/in/mbabaylan" target="_blank"><img src={linkedin} alt="my linkedin profile" width="28px" height="22px"/></a></li>
                       <li><a onClick={()=>{copyGmail()}} ><img src={gmail} alt="copy my gmail to clipboard" width="28px" height="22px"/></a></li>
                       <li><a onClick={()=>{copyPhone()}} ><img src={phone} alt="copy my phone number to clipboard"  width="28px" height="22px"/></a></li>
                   </ul>
            </nav>
            {isVisible ? (<div style={shown} className="copyModal"><span>{msg} copied to clipboard.</span></div>) : (<div style={hidden} className="copyModal"><span>{msg} copied to clipboard.</span></div>)}
            <h4 className="name">Mark Daniel C. Babaylan</h4>
            <main>
                <div className="download">
                    {cvFormat ? (<span><a href={pdf} download target="_blank" >Download CV in </a></span>) : (<span><a href={docx} download target="_blank" >Download CV in</a></span>)}
                    {/* <span><a href={pdf} download target="_blank" >Download CV in</a></span> */}
                    <select onChange={(e) => {handleCV(e)}}>
                        <option key="pdf" value="pdf"> .pdf </option>
                        <option key=".docx" value="docx"> .docx </option>
                    </select>
                </div>
            </main>
            <footer>
                   {/* Created using HTML, CSS, JS and ReactJS - 2020 - Mark Babaylan */}
            </footer>
        </>
    )
}
export default Main;
