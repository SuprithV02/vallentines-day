import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import LetterContinue from "./LetterContinue";

export default function LoveLetterContinue() {
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("canViewLoveLetter2");
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 35 }}
      style={{ width: "100vw", height: "100vh", background: "#1a120b" }}
    >
      {/* Warm ancient lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 4, 5]} intensity={1} />
      <pointLight position={[-3, -2, 4]} intensity={0.6} color="#ffcc99" />

      <LetterContinue />

      {/* Lock camera */}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}
