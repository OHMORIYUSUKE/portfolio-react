import React from 'react';
import './App.css';
import logo from './logo.svg';

import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Skill from './components/Skill';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Blogs2 from './components/Blogs2';

class App extends React.Component{

  render(){
    return (
      <div>
        <Header />
        <About />
        <Skill />
        <Blogs />
        <Blogs2 />
        <Contact />
        <Footer />
      </div>
    );  
  }
}


export default App;