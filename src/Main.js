import React from 'react';
import './css/main.css';
import linkedin from './img/white-linkedin1.png' 
import gmail from './img/white-gmail.png' 
import github from './img/white-github1.png' 
import html from './img/html.png' 
import css from './img/css.png' 
import js from './img/js.png' 
import react from './img/react.png' 

const skills = ['ReactJS', 'ASP.NET', 'C#', 'HTML', 'CSS', 'JavaScript (ES6)', 'Java', 'SQL Server', 'Oracle Database', 'MySQL', 'Adobe Photoshop', 'Microsoft Office', 'C', 'Android Studio', 'Git', 'GitHub', 'Tortoise SVN'];
const workXp = [
    {
        id: 1,
        EmployerName: 'PSBank',
        Job: 'Systems Analyst',
        Timeline: 'Nov 2019 - July 2020'
    },
    {
        id: 2,
        EmployerName: 'Tsukiden Global Solutions Inc.',
        Job: 'Design Engineer Trainee',
        Timeline: 'Mar 2019 - Aug 2019'
    },
    {
        id: 3,
        EmployerName: 'AND Digital',
        Job: 'Intern Back End Developer',
        Timeline: 'Jan 2018 - Apr 2018'
    }
]
const Main = () => {
    return (
        <>
            <nav className="navbar">
                       <div><a href="https://www.linkedin.com/in/mbabaylan/" target="_blank"><img src={linkedin} width="22px" height="22px"/></a></div>
                       <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=matmatmark@gmail.com" target="_blank"><img src={gmail} width="22px" height="22px"/></a></div>
                       <div><a href="https://github.com/mdbabaylan" target="_blank"><img src={github} width="22px" height="22px"/></a></div>
            </nav>
            <p className="intro-text">
                <span className="name">Hello. <br/><br/></span>
                I'm Mark Daniel C. Babaylan. <br/>
                And I am currently looking for Developer and Programmer job opportunities.
            </p>
            <main>
                <div className="skills">
                    <h2 className="header">Skills</h2>
                    <ul>
                        {skills.map(skills =>{
                            return (<li key={skills}>{skills}</li>)
                        })}
                    </ul>
                </div>
                <div className="work-exp">
                    <h2 className="header">Work Experience</h2>
                    
                        {workXp.map(work=>{
                            return(
                            <ul key={work.id}>
                                <h4>{work.EmployerName}</h4>
                                <li key={work.Job}>{work.Job}</li>
                                <li key={work.Timeline}>{work.Timeline}</li>
                            </ul>
                            )
                        })}
                </div>
            </main>
            <footer>
                    <div className="number">Contact #: 09270815174</div>
                    <img className="html" src={html} width="25px" height="25px"/>
                    <img className="css" src={css} width="25px" height="25px"/>
                    <img className="js" src={js} width="25px" height="25px"/>
                    <img className="react" src={react} width="25px" height="25px"/>
            </footer>
        </>
    )
}
export default Main;
