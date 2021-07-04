import React, { Component } from 'react';
import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import Rank from "./component/Rank/Rank";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
       density: {
         enable: true,
         value_area: 800
      },
    },
  },
};

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      input: ''
    }
   
  }

  onInputChange = (e) =>{
     console.log(e.target.value);
  }
  
  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} />
      {/* <FaceRecognition/> */}
    </div>
    );
  } 
}
export default App;
