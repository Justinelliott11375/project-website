import React, {
  Component
} from 'react';
import htmlCssJsLogos from '../images/htmlCssJsLogos.png'
import pygameImage from '../images/pygame_small.gif'
import reactLogo from '../images/reactLogo.png'
import pythonLogo from '../images/pythonLogo.png'
import firebaseLogo from '../images/firebaseLogo2.png'

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <p>I'm a Nashville based developer and graduate of the web development program at <a href="https://www.bloc.io"
          target="_blank"> Bloc.io </a>. I have experience in Javascript, ReactJS, Python, Pygame, Firebase, HTML and CSS.</p >
        <img id="htmlCssJsLogos" src={htmlCssJsLogos}></img>
        <img className="projectsLogos" src={reactLogo}></img>
        <img className="projectsLogos" src={pythonLogo}></img>
        <img className="projectsLogos" src={pygameImage}></img>
        <img className="projectsLogos" src={firebaseLogo}></img>
      </section>
    )
  }
}
export default AboutMe;
