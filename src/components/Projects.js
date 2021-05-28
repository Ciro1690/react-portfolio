import React from 'react';
import "../styles/Projects.css";
import recipebox from "../static/images/Recipebox.png";
import sundial from "../static/images/sundial.png";
import taco from "../static/images/taco-truck.png";
import blog from "../static/images/blogly.png";

const Projects = () => {
    return (
  <div id='projects' class='jumbo container jumbotron border border-dark rounded'>
        <h1 class="display-4 text-center py-5">Projects</h1>

        <div class="projects text-center mb-5">
            <a href="https://recipebox-capstone.herokuapp.com/" target="blank"><img id="recipebox" class="project-img border border-dark img-fluid rounded mx-auto mb-3" src={recipebox} alt="RecipeBox"/></a>
            <div>
                <div>
                    <h1>RecipeBox</h1>
                    <h5>Find and Save Your Favorite Recipes</h5>
                    <h5>Created with Python, Flask, Javascript & SQL</h5>
                    <a class="mr-2" href="https://github.com/Ciro1690/Capstone-1" target="blank">Github</a><br></br>
                    <a href="https://recipebox-capstone.herokuapp.com/" target="blank">Live Site</a>
                </div>
            </div>
        </div>

        <div class="projects text-center mb-5">
            <a href="https://sundialpantry.herokuapp.com/" target="blank"><img id="sundial"
                    class="project-img border border-dark img-fluid rounded mx-auto mb-3" src={sundial} alt="sundial"/></a>
            <div>
                <div>
                    <h1>Sundial Pantry</h1>
                    <h5>Local Farmer's Market Website</h5>
                    <h5>Created with Python & Flask</h5>
                    <a class="mr-2" href="https://github.com/Ciro1690/Sundialpantry" target="blank">Github</a><br></br>
                    <a href="https://sundialpantry.herokuapp.com/" target="blank">Live Site</a>
                </div>
            </div>
        </div>

        <div class="projects text-center mb-5">
            <a href="http://taco-truck-locator.herokuapp.com/" target="blank"><img id="taco-truck"
                    class="project-img border border-dark img-fluid rounded mx-auto mb-3" src={taco} alt="taco-truck"/></a>
            <div>
                <div>
                    <h1>Taco Truck Locator</h1>
                    <h5>Map Navigation Application</h5>
                    <h5>Created with Javascript, React & API Integration</h5>
                    <a class="mr-2" href="https://github.com/Ciro1690/Sundialpantry" target="blank">Github</a><br></br>
                    <a href="https://sundialpantry.herokuapp.com/" target="blank">Live Site</a>
                </div>
            </div>
        </div>

        <div class="projects text-center mb-5">
            <a href="https://ciro-blog-app.herokuapp.com/" target="blank"><img id="blogly" class="project-img border border-dark img-fluid rounded mx-auto mb-3" src={blog} alt="Blogly"/></a>
            <div>
                <div>
                    <h1>Everyone's a Critic</h1>
                    <h5>Media Reviewing Website</h5>
                    <h5>Created with Python, Flask & SQL</h5>
                    <a class="mr-2" href="https://github.com/Ciro1690/Blogly" target="blank">Github</a><br></br>
                    <a href="https://ciro-blog-app.herokuapp.com/" target="blank">Live Site</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects;