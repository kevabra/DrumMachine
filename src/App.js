import logo from './logo.svg';
import './App.css';
import React from 'react';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: ''
    };
    this.doKeyPress = this.doKeyPress.bind(this);
    this.doBtnClick = this.doBtnClick.bind(this);
  }

  doKeyPress(event) {
    
    switch (event.key) {
      case "q":
        document.getElementById("btnQ").click();
        break;
      case 'w':
        document.getElementById("btnW").click();
        break;
      case 'e':
        document.getElementById("btnE").click();
        break;
      case 'a':
        document.getElementById("btnA").click();
        break;
      case 's':
        document.getElementById("btnS").click();
        break;
      case 'd':
        document.getElementById("btnD").click();
        break;
      case 'z':
        document.getElementById("btnZ").click();
        break;
      case 'x':
        document.getElementById("btnX").click();
        break;
      case 'c':
        document.getElementById("btnC").click();
        break;
    }
  }

  doBtnClick(event) {
    console.log(event);
    switch (event.target.textContent) {
      case "Q":
        this.setState({
          button: "Hand Drums I"
        });
        document.getElementById("Q").play();
        break;
      case "W":
        this.setState({
          button: 'Drum Roll'
        });
        document.getElementById("W").play();
        break;
      case 'E':
        this.setState({
          button: 'Hand Drums II'
        });
        document.getElementById("E").play();
        break;
      case 'A':
        this.setState({
          button: "Drum Beat I"
        });
        document.getElementById("A").play();
        break;
      case 'S':
        this.setState({
          button: "Synth"
        });
        document.getElementById("S").play();
        break;
      case 'D':
        this.setState({
          button: "Bass Drum"
        });
        document.getElementById("D").play();
        break;
      case 'Z':
        this.setState({
          button: "Drum Beat II"
        });
        document.getElementById("Z").play();
        break;
      case 'X':
        this.setState({
          button: "Strings"
        });
        document.getElementById("X").play();
        break;
      case 'C':
        this.setState({
          button: "Drum Break"
        });
        document.getElementById("C").play();
        break;
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.doKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.doKeyPress);
  }

  render() {
    return (
      <div>
        <h1 id="top-header">Drum Machine</h1>
        <div id="display">
            <h2>{this.state.button}</h2>  
          </div>
        <div id="drum-machine">
          <button className="drum-pad"
          id="btnQ" onClick={this.doBtnClick}>
            Q
            <audio src={'http://soundjax.com/reddo/38691%5Echaos_handdrums.mp3'} type="audio/mpeg" className="clip" id="Q">
            </audio>  
          </button>
          <button id="btnW" className="drum-pad" onClick={this.doBtnClick}>
            W
            <audio src={"http://soundjax.com/reddo/13426%5Edrum.mp3"} className="clip" id="W">
            </audio>  
          </button>
          <button id="btnE" className="drum-pad" onClick={this.doBtnClick}>
            E
            <audio src={"http://soundjax.com/reddo/81565%5Ehandrum2.mp3"} className="clip" id="E">
            </audio>  
          </button>
          <button id="btnA" className="drum-pad" onClick={this.doBtnClick}>
            A
            <audio src={"https://orangefreesounds.com/wp-content/uploads/2021/09/Dirty-drum-loop.mp3?_=1"} className="clip" id="A">
            </audio>  
          </button>
          <button id="btnS" className="drum-pad" onClick={this.doBtnClick}>
            S
            <audio src={"https://orangefreesounds.com/wp-content/uploads/2015/01/Bass-loop-135-bpm.mp3"} className="clip" id="S">
            </audio>  
          </button>
          <button id="btnD" className="drum-pad" onClick={this.doBtnClick}>
            D
            <audio src={"https://orangefreesounds.com/wp-content/uploads/2015/07/102-bpm-drum-beat.mp3"} className="clip" id="D">
            </audio>  
          </button>
          <button id="btnZ" className="drum-pad" onClick={this.doBtnClick}>
            Z
            <audio src={"https://orangefreesounds.com/wp-content/uploads/2014/11/Analog-drum-loop-115-bpm.mp3"} className="clip" id="Z">
            </audio>  
          </button>
          <button id="btnX" className="drum-pad" onClick={this.doBtnClick}>
            X
            <audio src={"https://orangefreesounds.com/wp-content/uploads/2021/06/Epic-synth-strings-intro.mp3"} className="clip" id="X">
            </audio>  
          </button>
          <button id="btnC" className="drum-pad" onClick={this.doBtnClick}>
            C
            <audio src={"https://orangefreesounds.com/wp-content/uploads/2014/12/Drum-break.mp3"} className="clip" id="C">
            </audio>  
          </button>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
