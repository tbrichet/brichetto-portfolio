import React from 'react';
import PDF from './resume.pdf';
import './resume.css'

function Resumeheader() {
  return (
    <section id="resumeheader" className="jumbotron text-center">
        <h1 className="display-3">Resume</h1>
        <p className="lead"><a href = {PDF} className="pdf-link" target="_blank">Click for PDF</a></p>
    </section>
  );
}

export default Resumeheader;