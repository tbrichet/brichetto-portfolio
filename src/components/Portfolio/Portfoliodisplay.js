
import React, { Component } from 'react';
import project1 from './project1.jpg';
import project2 from './project2.jpg';
import project3 from './project3.jpg';
import './portfolio.css';

// Card format adapted from "Bootstrap Cards" by Mary Czapkowska with Free Frontend

// Note to self - list projects from newest (most advanced) to oldest
// Add Github repo links to projects

class Portfoliodisplay extends Component {
  render () {
    return (
      <>
      <section id="gallery" className="portfolioBackground">
        <div className="container portfolioContainer">
          <div className="row">
            <div className="col-lg-4 mb-4 d-flex align-items-sm-stretch">
              <div className="card">
                <img src={project1} alt="placeholder" className="card-img-top imagestyle" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Munch-A-Movie</h5>
                  <p className="card-text">Collaborative project allowing users to pair movies with dinner recipes. Built with HTML, CSS, Javascript, and server-side APIs</p><br />
                  <a href="https://richardflores009.github.io/Munch-A-Movie/" rel="noreferrer noopener" target="_blank" className="btn btn-outline-info btn-sm mt-auto">Visit Site</a> <br />
                  <a href="https://github.com/Richardflores009/Munch-A-Movie" rel="noreferrer noopener" target="_blank" className="btn btn-outline-info btn-sm mt-auto">Github Repository</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 d-flex align-items-sm-stretch">
              <div className="card">
                <img src={project2} alt="placeholder" className="card-img-top imagestyle" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">MyHaus</h5>
                  <p className="card-text">Collaborative project serving as a user portal for landlords and residents. Built with Node.js, Express, Handlebars, Sequelize, Bcrypt, and MySql2 </p><br />
                  <a href="https://my-haus.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="btn btn-outline-info btn-sm">Visit Site</a> <br />
                  <a href="https://github.com/Richardflores009/MyHaus" rel="noreferrer noopener" target="_blank" className="btn btn-outline-info btn-sm mt-auto">Github Repository</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 d-flex align-items-sm-stretch">
              <div className="card">
                <img src={project3} alt="placeholder" className="card-img-top imagestyle" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Mamasita Empanadas</h5>
                  <p className="card-text">Collaborative project serving as an interactive site for a local restaurant. Built with MERN, Performant JavaScript, NoSQL, Apollo, and GraphQL</p><br />
                  <a href="https://mamasita-empanadas.herokuapp.com//" rel="noreferrer noopener" target="_blank" className="btn btn-outline-info btn-sm mt-auto">Visit Site</a> <br />
                  <a href="https://github.com/Richardflores009/Mamasita-Empanadas" rel="noreferrer noopener" target="_blank" className="btn btn-outline-info btn-sm mt-auto">Github Repository</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

    )
  }
}

export default Portfoliodisplay