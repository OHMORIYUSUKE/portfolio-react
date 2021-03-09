import React from 'react';
import './App.css';
import logo from './logo.svg';

import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Skill from './components/Skill';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

//デプロイ 参考 https://bagelee.com/programming/react/react-smart-speaker-8/

class App extends React.Component{

  render(){
    return (
      <div>
        <Header />
        <About />
        <Skill />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    );  
  }
}


export default App;