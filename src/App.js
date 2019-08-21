import React from "react";
import Tone from "tone";
import Sequencer from "./components/Sequencer";
import Waveshaper from "./components/Waveshaper";
import Effects from "./components/Effects";
import "./App.css";
import "./sequencer.css";
import "./waveshaper.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      synths: [
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster(),
        new Tone.Synth().toMaster()
      ],

      ping: new Tone.PingPongDelay("4n", 0.2).toMaster(),
      verb: new Tone.Freeverb(0.6).toMaster()
    };
  }
  start = () => {
    Tone.Transport.start();
  };
  stop = () => {
    Tone.Transport.stop();
  };

  speed = bpm => {
    Tone.Transport.bpm.value = bpm;
  };

  render() {
    return (
      <div id="container">
        <h1>1IKATARU</h1>
        <div id="boxes">
          {" "}
          <div id="buttons2">
            <div id="waves">
              <Waveshaper synth={this.state.synths[0]} id={"a"} />
              <Waveshaper synth={this.state.synths[1]} id={"b"} />
              <Waveshaper synth={this.state.synths[2]} id={"c"} />
              <Waveshaper synth={this.state.synths[3]} id={"d"} />
              <Waveshaper synth={this.state.synths[4]} id={"e"} />
              <Waveshaper synth={this.state.synths[5]} id={"f"} />
              <Waveshaper synth={this.state.synths[6]} id={"g"} />
              <Waveshaper synth={this.state.synths[7]} id={"h"} />
              <Waveshaper synth={this.state.synths[8]} id={"i"} />
              <Waveshaper synth={this.state.synths[9]} id={"j"} />
              <Waveshaper synth={this.state.synths[10]} id={"k"} />
              <Waveshaper synth={this.state.synths[11]} id={"l"} />
              <Waveshaper synth={this.state.synths[12]} id={"m"} />
            </div>
            <div id="effects">
              <Effects synth={this.state.synths[0]} id="0" />
              <Effects synth={this.state.synths[1]} id="1" />
              <Effects synth={this.state.synths[2]} id="2" />
              <Effects synth={this.state.synths[3]} id="3" />
              <Effects synth={this.state.synths[4]} id="4" />
              <Effects synth={this.state.synths[5]} id="5" />
              <Effects synth={this.state.synths[6]} id="6" />
              <Effects synth={this.state.synths[7]} id="7" />
              <Effects synth={this.state.synths[8]} id="8" />
              <Effects synth={this.state.synths[9]} id="9" />
              <Effects synth={this.state.synths[10]} id="10" />
              <Effects synth={this.state.synths[11]} id="11" />
              <Effects synth={this.state.synths[1]} id="12" />
            </div>
          </div>
          <div id="matrix">
            <Sequencer synth={this.state.synths[0]} note={"C3"} />
            <Sequencer synth={this.state.synths[1]} note={"Db3"} />
            <Sequencer synth={this.state.synths[2]} note={"D3"} />
            <Sequencer synth={this.state.synths[3]} note={"Eb3"} />
            <Sequencer synth={this.state.synths[4]} note={"E3"} />
            <Sequencer synth={this.state.synths[5]} note={"F3"} />
            <Sequencer synth={this.state.synths[6]} note={"Gb3"} />
            <Sequencer synth={this.state.synths[7]} note={"G3"} />
            <Sequencer synth={this.state.synths[8]} note={"Ab3"} />
            <Sequencer synth={this.state.synths[9]} note={"A3"} />
            <Sequencer synth={this.state.synths[10]} note={"Bb3"} />
            <Sequencer synth={this.state.synths[11]} note={"B3"} />
            <Sequencer synth={this.state.synths[12]} note={"C4"} />
          </div>
        </div>

        <div id="buttons">
          <button onClick={() => this.start()}>start</button>
          <button onClick={() => this.stop()}>stop</button>
          <input
            type="range"
            min="70"
            max="160"
            onChange={event => this.speed(event.target.value)}
          />
          <label>BPM</label>
        </div>
      </div>
    );
  }
}
export default App;
