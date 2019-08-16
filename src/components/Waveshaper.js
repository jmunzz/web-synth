import React from "react";
import Tone from "tone";
import "../waveshaper.css";

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
function sine(props) {
  props.synth.oscillator.type = "sine";
}
function sawtooth(props) {
  props.synth.oscillator.type = "sawtooth";
}
function square(props) {
  props.synth.oscillator.type = "square";
}
function triangle(props) {
  props.synth.oscillator.type = "triangle";
}

function Waveshaper(props) {
  return (
    <div className="dropdown">
      <button onClick={() => myFunction(props.id)} className="dropbtn">
        waveshaper
      </button>
      <div id={props.id} className="dropdown-content">
        <button onClick={() => sine(props)}>sine</button>
        <button onClick={() => square(props)}>square</button>
        <button onClick={() => sawtooth(props)}>sawtooth</button>
        <button onClick={() => triangle(props)}>triangle</button>
      </div>
    </div>
  );
}

export default Waveshaper;
