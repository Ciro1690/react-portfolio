import React from 'react';
import self from "../static/images/self2.jpeg";
import "../styles/Intro.css";

const Intro = () => {
    return (
    <div id='intro' className="jumbo container border border-dark rounded">
            <div className="intro text-center p-3">
                <h1 className="display-3">Ciro Griffiths</h1>
                <h2>Full-stack Software Engineer</h2><br></br>
                <img className="self-photo" src={self} alt="self"/>

                <h3>Front-end</h3> 
                <h5>Javascript, Python, React, AJAX, Ruby, Responsive Design</h5>
                <h3>Back-end</h3> 
                <h5>Node.js, Express, Flask, API Integration, Ruby on Rails</h5>
                <h3>Database</h3>
                <h5>SQL, PostgreSQL, SQL Alchemy</h5>
                <h3>Deployment</h3>
                <h5>Git, Heroku</h5>
            </div>
    </div>    
    )
}

export default Intro;