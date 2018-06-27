import React, { Component } from 'react';
import blocChatFullShot from '../images/blocChatFullScreenShot1.png'

class BlocChat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Bloc Chat</h2>
        <h4 className="features">Bloc Chat is a chat room web application built with Javascript, ReactJS, and firebase. Features include:</h4>
        <img className="appFullImage" src={blocChatFullShot} alt="bloc Chat"></img>
        <ul className="featureList">
          <li>log in with Google account or as a guest</li>
          <li>create and delete chat rooms</li>
          <li>select a chat room to view from list</li>
          <li>send messages to the chat room currently selected</li>
          <li>all changes are updated to firebase in real time</li>
        </ul>
        <a href="secret-brushlands-83059.herokuapp.com" target="_blank">Launch Bloc Chat in a new  browser tab</a>
      </div>
    )
  }
}
export default BlocChat;
