import React from 'react';
import './Warner.css';

// images
import warnerLogo from '../../img/portfolio/warner/warner_logo.jpg';

const Warner = () => {
  return (
    <div className="subp warner">
      <div className="content">
      
        <header className="cover">&nbsp;</header>

        <div className="page">
          
          <article>
            <a href="https://www.warner.rochester.edu/" target="_blank" rel="noopener noreferrer"><img src={warnerLogo} alt="Warner School of Education logo" className="logo" /></a>
            
            <div className="white-bg">
              <h1 id="portfolio-h1">Warner School of Education</h1>
              <p className="visit"><a href="https://www.warner.rochester.edu/" target="_blank" rel="noopener noreferrer">Click here to visit site &#8594;</a></p>
      
              <h2 className="portfolio-h2">html &amp; css</h2>
              <p>While migrating content to new pages, I coded HTML in the widgets. While doing this, I eliminated deprecated tags and updated the code to conform to current norms.</p>
      
              <h2 className="portfolio-h2">php</h2>
              <p>During the course of this internship, I coded a function to create a working <a href="https://www.warner.rochester.edu/sitemap" target="_parent">search bar for the site map</a>. I first thought about the task in terms of how computers understand the problem and decided how to code it. After writing the PHP, I tested and refined my solution. I expanded it for longer search terms and fixed design problems (like confusing indentation) in the results list.</p>
      
              <p>I tested the search function across all browsers and platforms. I encountered bugs in some browsers, particularly on the mobile site.</p>
      
              <h3>Troubleshooting Process:</h3>
              <ol>
                <li>Carefully check code for mistakes.</li>
                <li>Ask the internet (Google is your friend).</li>
                <li>Edit code &amp; test it.</li>
                <li>If unsuccessful, repeat steps 1-3.</li>
                <li>If I still can't get it after a few tries, I consult my supervisor.</li>
              </ol>
      
              <h2 className="portfolio-h2">user experience design</h2>
              <p>I improved the UX by putting myself in the user's place and coding the front-end so that it would behave as expected. For example, there is a page with an outline of the faculty/staff handbook. There was no distinction between links that:</p>
              <ol>
                <li>Open a new page</li>
                <li>Download a PDF or other file</li>
              </ol>
      
              <p>To eliminate the possibility of surprise downloads, I needed to ask myself, "How do I make it obvious that a list item will start a download?" After considering a variety of options and checking other sites to see how they behave in this situation, I removed the hyperlink from each list item and added a clear "download" link in parentheses at the end of the line.</p>
      
              <h2 className="portfolio-h2">design</h2>
              <p>While migrating content from old pages to new ones as we revamped the site, I applied several main design principles (repetition, hierarchy, space, and rhythm, to name a few). Using fonts and colors already on the website, I cleaned up the overall visual impression of each page, shortened and clarified content, and made sure layout was consistent across the site.</p>
              <p>Everyone else on my team specialized in back-end coding, so my supervisor assigned all design work and CSS coding to me. When once he asked me to create a new button design, I made 4 different options using CSS classes. I utilized colors already present in the site's color scheme in order to seamlessly integrate the buttons, and I added gradient with other blues and yellows in the site's design.</p>
            </div>{/* .white-bg */}
          </article>
          {/* <footer></footer> */}
        </div>{/* .page */}
      </div>
    </div>
  );
}

export default Warner;