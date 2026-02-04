import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Letter from "./Letter";
import { useEffect } from "react";

export default function LoveLetter() {
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("canViewLoveLetter");
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

      <Letter />

      {/* Lock camera */}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}
