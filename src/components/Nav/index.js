import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
  render () {
  return (
    <section>
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li><Link to="/about">About</Link></li>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
            </ul>
      </div>
    </section>
  );
  }
}

export default Nav;