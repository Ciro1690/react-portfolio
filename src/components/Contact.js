import React from 'react';
import "../styles/Contact.css";
import resume from "../static/images/CG.pdf";

const Contact = () => {
    return (
        <div id='contact' class='jumbo container jumbotron border border-dark rounded mb-5'>
            <h1 className="display-4 text-center py-3">Contact</h1>
            <ul className="contact-ul">
                <li><i class="fas fa-file fa-lg m-3"></i><a href={resume} target="blank"> Resume</a></li>
                <li><i class="fab fa-github fa-lg m-3"></i><a href="https://github.com/Ciro1690" target="blank"> Ciro1690</a></li>
                <li><i class="fab fa-linkedin fa-lg m-3"></i><a href="https://www.linkedin.com/in/ciro-griffiths-49b2a032/" target="blank">
                    Linkedin</a></li>
                <li><i class="fa fa-envelope-o fa-lg m-3" aria-hidden="true"></i><a href="mailto:Ciro16@gmail.com" target="blank">Ciro16@gmail.com</a></li>
            </ul>
        </div>
    )
}

export default Contact;