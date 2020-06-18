import React from "react";
import { useStateMachine } from "little-state-machine";
import Update from "./Update";

const ConfirmThankYou = props => {
  const { state } = useStateMachine(Update);

  return (
    <div className="container">
      <h2>Deine Angaben</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      
    </div>
  );
};

export default ConfirmThankYou;