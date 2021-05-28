import React from 'react';
import "../styles/About.css";
import enzo from "../static/images/enzo.jpg";
const About = () => {
    return (
        <div id='about' class='jumbo container jumbotron border border-dark rounded'>
            <h1 class="display-4 text-center py-5">About Me</h1>
            <div class="row">
                <div class="wrapper mb-3">
                    <img class="enzo col-6 mx-auto d-block" src={enzo} alt="enzo"/>
                </div>
                <h5 class="text-center p-5">
                I grew up in upstate New York and graduated from Union College with a degree in Neuroscience.
                I am currently finishing up the curriculum at Springboard, a full-stack coding bootcamp.<br></br>
                <br></br>
                I'm passionate about constantly improving my skill set and am eager to keep learning.<br></br>
                        
                This past year, I took a cross country road trip with my girlfriend and puppy and we now live in San Diego. Please feel free to reach out to me!</h5>
            </div>
        </div>
    )
}

export default About;