// ConfettiWrapper.jsx
import React from "react";
import Confetti from "react-confetti";

export default function ConfettiWrapper({ run, onComplete }) {
  if (!run) return null;

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false} // stop automatically
      numberOfPieces={300}
      gravity={0.2}
      onConfettiComplete={onComplete}
    />
  );
}
