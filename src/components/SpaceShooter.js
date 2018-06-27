import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import spaceShooterFullShot from '../images/spaceShooterFullShot.png'

class SpaceShooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Space Shooter</h2>
          <h4 className="features">Space Shooter is a retro style 2D shooter game built with Python and the Pygame gaming library. Features include:</h4>
          <img className="appFullImage" src={spaceShooterFullShot} alt="Space Shooter"></img>
          <ul className="featureList">
            <li>game start and game over screens</li>
            <li>randomly generated enemies with random speeds and trajectories</li>
            <li>collision detection for player, enemies, and projectiles</li>
            <li>sound effects</li>
            <li>score keeping and numbered lives</li>
          </ul>
      </div>
    )
  }
}
export default SpaceShooter;
