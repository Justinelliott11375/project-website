import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import gitHubLogo from '../images/GitHub-Mark-Light-120px-plus.png';
import linkedInLogo from '../images/In-White-121px-R.png';
import emailLogo from '../images/email-xxl.png';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h3>Hi, I'm Justin.</h3>
        <p>Front End Developer / Game Development Enthusiast</p>
        <a href="https://github.com/Justinelliott11375" target="_blank"><img className="logos" src={gitHubLogo}></img></a>
        <a href="https://www.linkedin.com/in/justin-elliott-261503159/" target="_blank"><img className="logos" src={linkedInLogo}></img></a>
        <img className="logos" src={emailLogo}></img>
      </section>
    )
  }
}
export default Home;
