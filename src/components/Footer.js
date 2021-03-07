import React from 'react'
import logo from '../logo.svg';

const Footer =()=>{
  const footer = {
    color: "white",
    textAlign: "center",
    backgroundColor: "#282c34",
    paddingTop: "30px",
    paddingBottom: "30px",
  }
  return(
    <>   
      <footer style={footer}>
      Copyright © 2021 Ohmori Yusuke Portfolio All Rights Reserved.
      </footer>    
    </>
  )
}

export default Footer