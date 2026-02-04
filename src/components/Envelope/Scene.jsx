import { Canvas } from "@react-three/fiber";
import Envelope from "./Envelope";
import Background from "./Background";
import { useState } from "react";
import ConfettiWrapper from "./Confetti";
import Pigeon from "./Pigeon";

export default function Scene() {
  const [runConfetti, setRunConfetti] = useState(false);
  const [showPigeon, setShowPigeon] = useState(false);

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 30 }}
        onPointerMissed={(e) => e.stopPropagation()}
      >
        {" "}
        //camera is set at z = 5, which is placed away from the origin and
        looking towards it and fov is the field of view = 50, which controls how
        wide the view is
        <ambientLight intensity={0.2} /> //ambient light provides a base level
        of light to the entire scene
        <directionalLight position={[7, 3, 10]} intensity={1} /> //directional
        light simulates sunlight coming from a specific direction
        <Background />
        <Envelope
          triggerConfetti={() => {
            setRunConfetti(true);
            setShowPigeon(true);
          }}
        />
        <Pigeon active={showPigeon} />
      </Canvas>

      <ConfettiWrapper
        run={runConfetti}
        onComplete={() => setRunConfetti(false)}
      />
    </>
  );
}
