import React, { Component } from 'react';
import adobeLogo from '../images/adobeLogo.png'

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        {
        <p>Contact text</p>
        }
        <p>resume pdf:<img className='projectsLogos' src={adobeLogo}></img></p>
      </section>
    )
  }
}
export default Contact;
