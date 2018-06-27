import React, { Component } from 'react';
import blocJamsFullShot from '../images/blocJamsFullShot.png'


class BlocJams extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Bloc Jams</h2>
        <h4 className="features">Bloc Jams is a music player web application built with Javascript and ReactJS. Features include:</h4>
        <img className="appFullImage" src={blocJamsFullShot} alt="bloc Jams"></img>
        <ul className="featureList">
          <li>albums rendered with cover art, artist, number of songs, etc.</li>
          <li>play, pause, and skip buttons</li>
          <li>sliders for volume and song time</li>
          <li>song numbers render a pause button on song currently playing</li>
          <li>song numbers render a play button when hovered over</li>
        </ul>
        <a href="https://.shrouded-journey-99212.herokuapp.com" target="_blank">Launch Bloc Jams in a new  browser tab</a>
      </div>
    )
  }
}
export default BlocJams;
