import React from "react";
import Tone from "tone";
import "../effects.css";

function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var ping = new Tone.PingPongDelay("4n", 0.2).toMaster();
var verb = new Tone.Freeverb().toMaster();
var dist = new Tone.Distortion().toMaster();
var phaser = new Tone.Phaser().toMaster();
var filter = new Tone.AutoFilter().toMaster();

function firePing(event, props) {
  if (event.target.checked) {
    props.synth.connect(ping);
  } else {
    props.synth.disconnect(ping);
  }
}

function fireVerb(event, props) {
  if (event.target.checked) {
    props.synth.connect(verb);
  } else {
    props.synth.disconnect(verb);
  }
}

function fireDist(event, props) {
  if (event.target.checked) {
    props.synth.connect(dist);
  } else {
    props.synth.disconnect(dist);
  }
}

function firePhaser(event, props) {
  if (event.target.checked) {
    props.synth.connect(phaser);
  } else {
    props.synth.disconnect(phaser);
  }
}

function fireFilter(event, props) {
  if (event.target.checked) {
    props.synth.connect(filter);
  } else {
    props.synth.disconnect(filter);
  }
}

function Effects(props) {
  return (
    <div className="dropdown">
      <button onClick={() => myFunction(props.id)} className="dropbtn">
        effects
      </button>
      <div id={props.id} className="dropdown-content">
        <input type="checkbox" onChange={event => fireVerb(event, props)} />
        <label>verb</label>
        <input
          type="checkbox"
          onChange={event => firePing(event, props)}
          value="ping"
        />
        <label>ping</label>
        <input
          type="checkbox"
          onChange={event => fireDist(event, props)}
          value="ping"
        />
        <label>dist</label>
        <input
          type="checkbox"
          onChange={event => firePhaser(event, props)}
          value="ping"
        />
        <label>phaser</label>
        <input
          type="checkbox"
          onChange={event => fireFilter(event, props)}
          value="ping"
        />
        <label>filter</label>
      </div>
    </div>
  );
}
export default Effects;
