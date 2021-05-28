import React from 'react';
import '../styles/Skills.css'
import js from "../static/images/js.png";
import node from "../static/images/node.png";
import flask from "../static/images/flask.png";
import html from "../static/images/html.png";
import react from "../static/images/react2.png";
import python from "../static/images/python.jpg";
import css from "../static/images/css2.png";
import jquery from "../static/images/jquery.jpeg";
import sql from "../static/images/sql.jpeg";
import post from "../static/images/postgresql.png";
import union from "../static/images/union.jpeg";
import springboard from "../static/images/springboard.png";

const Skills = () => {
    return (
    <div id="skills" className="jumbo skills-outer container border border-dark rounded">
        <h1 className="display-4 text-center py-3">Skills</h1>
        <div id="skills-bg" className="container mb-3">
            <div className="row p-3">
                <img className="skills mx-auto d-block" src={js} alt="js" />
                <img className="skills mx-auto d-block" src={node} alt="nodejs" />
                <img className="skills mx-auto d-block" src={react} alt="react" />
                <img className="skills mx-auto d-block" src={python} alt="python" />
                <img className="skills mx-auto d-block" src={flask} alt="flask" />
                <img className="skills mx-auto d-block" src={html} alt="html" />
                <img className="skills mx-auto d-block" src={css} alt="css" />
                <img className="skills mx-auto d-block" src={jquery} alt="jquery" />
                <img className="skills mx-auto d-block" src={sql} alt="sql" />
                <img className="skills mx-auto d-block" src={post} alt="postgresql" />
            </div>
        </div>
        <div className="p-3">
            <h3 className="text-center">Javascript • Nodejs • React • Python • Flask</h3>
            <h3 className="text-center">HTML • CSS • JQuery • SQL • PostgreSQL</h3>
            <h1 className="display-4 text-center mt-3 py-3">Education</h1>
                <img id="education" className= "mx-auto d-block" src={union} alt="Union"/>
                <h5 className="text-center m-3">• Bachelor's Degree in Neuroscience </h5>
                <h5>• Magna Cum Laude</h5>
                <img id="education" className= "mx-auto d-block" src={springboard} alt="Springboard"/>
                <h5 className="text-center m-3">• 700+ hours software engineering bootcamp </h5>
                <h5>• Mastered skills in ​front-end and back-end web
                    development, databases, data structures and algorithms.</h5>
        </div>
    </div>
    )
}

export default Skills;