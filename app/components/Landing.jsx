/* eslint-disable max-len */
import { Link } from 'react-router';
import React from 'react';

const Landing = React.createClass({
  render() {
    const styleButtonContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    };

    return <div>
      <div id="image-container">
        <img className="hero" id="hero" src={"./images/hero.jpg"} />
        <img className="hero" id="hero-small" src={"./images/hero-small.jpg"} />
        <img className="hero" id="hero-medium" src={"./images/hero-medium.jpg"} />
        <div id="action-button-container">
          <Link to={'/register'}>
            <div id="action-button">
              START HIRING BETTER
            </div>
          </Link>
        </div>
      </div>

      <section id="column-container">
        <div className="info-column">
          <h4 className="column-title">What is implicit bias?</h4>
          <div>_____________________</div>
          <br />
          <div className="column-text">Unlike <em>explicit</em> bias which reflects the beliefs that one endorses at a conscious level, <em>implicit</em> bias is the bias in judgment and/or behavior that results from subtle cognitive processes that operate at a level below conscious awareness and without intentional control.
          </div>
        </div>
        <div className="info-column">
          <h4 className="column-title">How does implicit bias affect hiring?</h4>
          <div>_____________________</div>
          <br />
          <div className="column-text">In 2003, two professors from the University of Chicago and MIT conducted a <b><a href="http://www.nber.org/digest/sep03/w9873.html">study</a></b> to test the effect of race on callback rates for job applicants. They found that applicants with white sounding names received 50 percent more callbacks than similarly qualified candidates with black sounding names.</div>
        </div>
        <div className="info-column">
          <h4 className="column-title">How does Smart Hire work?</h4>
          <div>_____________________</div>
          <br />
          <div className="column-text">Smart Hire addresses implicit bias in the screening of job applicants by keeping all applications anonymous during your initial review. This lets you focus solely on an applicants qualifications. Once you have reviewed and evaluated an application, then you can decide which ones to pursue.</div>
        </div>
      </section>

      <div style={styleButtonContainer} />

    </div>;
  }
});

export default Landing;
