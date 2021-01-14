import React from 'react';
import portfolioimage from './portfolioimage2.png'
import './home.css'

function Homeimage() {
  return (
    <section>
        <>
        <div className="jumbo relative bg-white overflow-hidden mainpage">
          <div className="jumbo max-w-7xl mx-auto">
            <div className="jumbo textarea relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="jumbo mt-10 mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="jumbo sm:text-center lg:text-left">
                <h1 className="jumbo text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <p><span className="jumbo block xl:inline" >Tara Brichetto</span></p>
                  <span className="jumbo block xl:inline" style={{color: "#7e6688"}}>Web Developer</span>
                </h1>
                <p className="jumbo mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Dedicated full stack web developer and recent graduate of the University of Arizona's coding bootcamp. Proven success working individually and in teams. Additional experience in education, finance, and business administration. Always learning, and always coding!
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full imagestyle" src= {portfolioimage} alt />
        </div>
      </div>
    </>
    </section>
  );
}

export default Homeimage;