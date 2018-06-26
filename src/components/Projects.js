import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import blocJamsImage from '../images/blocJamsScreenShot1.png'
import blocChatImage from '../images/blocChatScreenShot1.png'
import spaceShooterImage from '../images/shooterScreenShot2.png'
import spaceShooterImageGray from '../images/shooterScreenShot2Gray.png'
class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <h3>Bloc Jams: An intuitive music player</h3>
        <Link to="/BlocJams"><img className="images" src={blocJamsImage}></img></Link>
        <h3>Bloc Chat: A real-time chat application</h3>
        <Link to="/BlocChat"><img className="images" src={blocChatImage}></img></Link>
        <h3>Space Shooter: A retro arcade experience</h3>
        <Link to="/SpaceShooter"><img className="images" src={spaceShooterImage} alt="Space Shooter"></img></Link>
      </div>
    )
  }
}
export default Projects;
