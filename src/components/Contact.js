import React, { Component } from 'react';
import adobeLogo from '../images/adobeLogo.png'
import resumePDF from '../images/Resume3.pdf'

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        {
        <p>My Resume</p>
        }
        <p>pdf:<a href={resumePDF} targe="_blank"><img className='projectsLogos' src={adobeLogo}></img></a></p>
      </section>
    )
  }
}
export default Contact;
