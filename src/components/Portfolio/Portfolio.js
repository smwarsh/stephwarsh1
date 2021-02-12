import React from 'react';
import './Portfolio.css';

// images
import projPotter from '../../img/portfolio/potter-quiz.jpg';
import projThrift from '../../img/portfolio/dollars_sm.jpg';
import projChallengeChannel from '../../img/portfolio/challengechannel_sm.jpg';
import devGTO from '../../img/portfolio/gto-logo.png';
import devWarner from '../../img/portfolio/warner_sm.jpg';

const Portfolio = () => {
  return (
    <div className="subp portfolio">
      <div className="content">
        <div className="page" id="portfolio">
    
          <h1>My Work</h1>
    
          <div className="white-bg">
    
            <h2>Projects</h2>
    
            <div className="work-item potter">
              <div className="graphic">&nbsp;</div>
              <div className="image">
                <a href="https://potternamegame.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={projPotter} alt="ReactJS Harry Potter quiz game screenshot" />
                </a>
              </div>
              <div className="description">
                <h3>ReactJS Harry Potter Quiz</h3>
                <p>React JS framework, JSX, JavaScript, CSS</p>
                <p>I let the Harry Potter nerd in me run wild and coded a dynamic quiz game to see how many Harry Potter characters a user can name in 10 minutes. Functionality and elements include a timer, data structures, deep copies of data, automatic game start, and display of results.</p>
                <p className="click">
                  <a href="https://potternamegame.herokuapp.com/" target="_blank" rel="noopener noreferrer">See it in action &#8594;</a>
                </p>
              </div>{/* .description */}
            </div>{/* .work-item */}
    
            <div className="work-item thrift">
              <div className="graphic">&nbsp;</div>
              <div className="image">
                <a href="https://github.com/smwarsh/thrift" target="_blank" rel="noopener noreferrer">
                  <img src={projThrift} alt="Thrift Spending Tracker" />
                </a>
              </div>
              <div className="description">
                <h3>Thrift Spending Tracker</h3>
                <p>JavaScript, HTML templates (Pug/Jade), Git, Node.js, Express, MongoDB</p>
                <p>I am developing a spending tracker web application to replace a tedious spreadsheet with which I am currently tracking my expenses.</p>
                <p className="click">
                  <a href="https://github.com/smwarsh/thrift" target="_blank" rel="noopener noreferrer">See it on GitHub &#8594;</a>
                </p>
              </div>{/* .description */}
            </div>{/* .work-item */}
    
            <div className="work-item challenge">
              <div className="graphic">&nbsp;</div>
              <div className="image">
                <a href="https://github.com/smwarsh/challenge-channel" target="_blank" rel="noopener noreferrer">
                  <img src={projChallengeChannel} alt="Challenge Channel" />
                </a>
              </div>
              <div className="description">
                <h3>Challenge Channel</h3>
                <p>Design, HTML, CSS, SASS, Bootstrap, GitHub</p>
                <p>I worked with a team to complete this web app for a web programming course. I designed the layout and coded all the HTML and CSS for the project.</p>
                <p className="click">
                  <a href="https://github.com/smwarsh/challenge-channel" target="_blank" rel="noopener noreferrer">See it on GitHub &#8594;</a>
                </p>
              </div>{/* .description */}
            </div>{/* .work-item */}
    
    
            <h2>Experience</h2>
    
            <div className="work-item gto">
              <div className="graphic">&nbsp;</div>
              <div className="image">
                <a href="https://greaterthanone.com/" target="_blank" rel="noopener noreferrer">
                  <img src={devGTO} alt="Web development at Greater Than One digital agency" />
                </a>
              </div>
              <div className="description">
                <h3>Greater Than One</h3>
                <p>JavaScript, jQuery, HTML, CSS, Drupal, WordPress, Crownpeak, Bootstrap</p>
                <p>I am given a design file and behavior information and I code the website to mirror it exactly. I pride myself on my clean, organized code for mobile-first sites that are responsive and work well across all major browsers for mobile and desktop devices, including Google Chrome, Firefox, Safari, Edge, and Internet Explorer 11.</p>
                <p className="click">
                  <a href="https://greaterthanone.com/" target="_blank" rel="noopener noreferrer">Visit the company site &#8594;</a>
                </p>
              </div>{/* .description */}
            </div>{/* .work-item */}
    
            <div className="work-item warner">
              <div className="graphic">&nbsp;</div>
              <div className="image">
                <a href="/portfolio/warner">
                  <img src={devWarner} alt="Warner" />
                </a>
              </div>          
              <div className="description">
                <h3>Warner School of Education</h3>
                <p>Design, HTML, CSS, PHP, CMS</p>
                <p>I enhanced the website for the graduate school of education at the University of Rochester, transferred content from the old site to the new site, and designed layouts.</p>
                <p className="click">
                  <a href="/portfolio/warner">Learn more &#8594;</a>
                </p>
              </div>{/* .description */}
            </div>{/* .work-item */}
    
          </div> {/* .white-bg */}
          </div>{/* .page */}
      </div>
    </div>
  );
}

export default Portfolio;