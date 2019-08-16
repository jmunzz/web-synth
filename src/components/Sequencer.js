import React from "react";
import Tone from "tone";
import "../sequencer.css";

function changeColor(id) {
  var element = document.querySelector("#" + id);
  if (element.classList.contains("red")) {
    element.classList.remove("red");
  } else {
    element.classList.add("red");
  }
}

function Sequencer(props) {
  document.documentElement.addEventListener("mousedown", () => {
    if (Tone.context.state !== "running") Tone.context.resume();
  });
  Tone.Transport.scheduleRepeat(repeat, "16n");

  var index = 0;

  var steps = [];
  for (let i = 0; i < 16; i++) {
    steps.push(
      <div
        key={i}
        onClick={() => changeColor("matrix" + props.note + i)}
        id={"matrix" + props.note + i}
      />
    );
  }

  function repeat(time) {
    let input = document.querySelector(`div#matrix${props.note}${index}`);
    if (input.classList.contains("red"))
      props.synth.triggerAttackRelease(props.note, "8n", time);

    if (index === 15) {
      index = 0;
    } else {
      index++;
    }
  }

  return steps;
}

export default Sequencer;
