import React from 'react';
import portfolioimage from './portfolioimage2.png'
import './home.css'

function Homeimage() {
  return (
    <section id="hero" className="d-flex align-items-center aboveFooter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <p><span className="block xl:inline" >Tara Brichetto</span></p>
              <span className="block xl:inline" style={{color: "#7e6688"}}>Web Developer</span>
            </h1>
            <p>Dedicated full stack web developer and recent graduate of the University of Arizona's coding bootcamp. Proven success working individually and in teams with additional experience in education, finance, and business administration. Always learning, and always coding!</p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay={200}>
          <img src={portfolioimage} className="img-fluid animated" alt="placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homeimage;