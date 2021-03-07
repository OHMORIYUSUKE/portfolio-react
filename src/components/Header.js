import React from 'react'
import logo from '../logo.svg';

const header =()=>{
    const next = {
        width: "30px",
        height: "30px",
        border: "5px solid",
        borderColor:  "transparent transparent #ffff #ffff",
        transform: "rotate(-45deg)",
      };
  return(
    <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome to my portfolio site !!
            </p>
            <div style={next}>
            </div>
            <div style={next}>
            </div>
          </header>
      </div>
    </>
  )
}

export default header