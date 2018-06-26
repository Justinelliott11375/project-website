import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BlocJams from './components/BlocJams'
import BlocChat from './components/BlocChat'
import SpaceShooter from './components/SpaceShooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/AboutMe'>About Me</Link>
            <Link to='/Projects'>Projects</Link>
            <Link to='/Contact'>Contact</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          <Route path="/BlocJams" component={BlocJams} />
          <Route path="/BlocChat" component={BlocChat} />
          <Route path="/SpaceShooter" component={SpaceShooter} />
        </main>
      </div>
    );
  }
}

export default App;
