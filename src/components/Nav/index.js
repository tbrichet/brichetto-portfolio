import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    // const {
    //   categories = [],
    //   setCurrentCategory,
    //   contactSelected,
    //   currentCategory,
    //   setContactSelected,
    // } = props;
  
    return (
      <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            Tara Brichetto
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about">
                About Me
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="portfolio" href="portfolio">
                Portfolio
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="contact" href="contact">
                Contact
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="resume" href="resume">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

export default Nav;