import React from 'react';
import './Home.css';

// images
import documentIcon from './../../img/icon/document-128.png';
import folderIcon from './../../img/icon/folder-128.png';
import githubIcon from './../../img/icon/github2.png';
import linkedinIcon from './../../img/icon/linkedin2.png';

const Home = () => {
  return (
    <>
      <div className="Home-content">
        <div className="Home-page">
          <div id="title">
            <h1>steph warsh</h1>
            <h2>front-end web developer</h2>
          
    
            <div id="resources">
              <ul>
                <li key="0" className="listItem">
                  <a href="files/StephWarshCV.pdf" title="resume" target="_blank" rel="noopener noreferrer">
                    <img src={documentIcon} alt="resume" width="40" height="40" />
                  </a>
                </li>
                {/* <!-- note to self: remember to add credit when adding external link icon
                <a target="_blank" href="https://icons8.com/icons/set/external-link">External Link icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>  --> */}
                <li key="1" className="listItem">
                  <a href="/portfolio" title="portfolio">
                    <img src={folderIcon} alt="portfolio" width="40" height="40" />
                  </a>
                </li>
                <li key="2" className="listItem">
                  <a href="https://github.com/smwarsh" title="github" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="github mark" width="40" height="40" />
                  </a>
                </li>
                <li key="3" className="listItem">
                  <a href="https://www.linkedin.com/in/stephwarsh" title="linkedin" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="linkedin icon" width="40" height="40" />
                  </a>
                </li>
              </ul>
            </div>{/*<!-- #resources -->*/}
    
          </div>{/*<!-- #title -->*/}
        </div>{/*<!-- .page -->*/}
      </div>
    </>
  );
}

export default Home;