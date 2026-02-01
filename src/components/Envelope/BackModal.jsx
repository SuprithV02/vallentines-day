// BackModal.jsx
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function BackModal() {
  const shape = new THREE.Shape();

  // Start somewhere off-center
  shape.moveTo(-0.75, -0.3);

  // Bottom-left bulge
  shape.quadraticCurveTo(-0.9, -0.6, -0.4, -0.65);

  // Bottom-right stretch
  shape.quadraticCurveTo(0.3, -0.75, 0.85, -0.4);

  // Right-side pinch
  shape.quadraticCurveTo(1.05, -0.05, 0.7, 0.15);

  // Upper-right wobble
  shape.quadraticCurveTo(0.9, 0.55, 0.35, 0.6);

  // Top dent
  shape.quadraticCurveTo(-0.15, 0.85, -0.55, 0.55);

  // Upper-left bulge
  shape.quadraticCurveTo(-1.0, 0.25, -0.8, -0.05);

  // Close back with uneven curve
  shape.quadraticCurveTo(-0.6, -0.35, -0.75, -0.3);

  const geometry = new THREE.ShapeGeometry(shape);

  /* ------------------ NO BUTTON LOGIC ------------------ */
  const noRef = useRef();
  const [noTarget, setNoTarget] = useState(new THREE.Vector3(0.3, -0.2, 0.02));

  const moveNoButton = () => {
    const x = THREE.MathUtils.randFloat(-0.5, 0.5);
    const y = THREE.MathUtils.randFloat(-0.3, 0.15);
    setNoTarget(new THREE.Vector3(x, y, 0.02));
  };

  useFrame(() => {
    if (!noRef.current) return;
    noRef.current.position.lerp(noTarget, 0.12);
  });

  /* ------------------ YES HANDLER ------------------ */
  const handleYes = () => {
    console.log("hello");
  };

  return (
    <group position={[0, 0, 0.05]}>
      {/* Modal background */}
      <mesh geometry={geometry}>
        {/* <planeGeometry args={[1.6, 0.9]} /> */}
        <meshBasicMaterial
          color="#c97c8e"
          transparent
          opacity={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Modal text */}
      <Text
        position={[0, 0.1, 0.01]} // slightly above the panel
        fontSize={0.14}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.3}
        textAlign="center"
        font="/fonts/ComicNeue-Italic.ttf" // optional funny font
      >
        Will You Be My Valentine?
      </Text>

      {/* YES BUTTON */}
      <mesh position={[-0.25, -0.25, 0.02]} onClick={handleYes}>
        <planeGeometry args={[0.28, 0.14]} />
        <meshBasicMaterial color="#32cd32" />
        <Text fontSize={0.07} color="white" position={[0, 0, 0.01]}>
          YES
        </Text>
      </mesh>

      {/* NO BUTTON */}
      <mesh
        ref={noRef}
        position={[0.3, -0.25, 0.02]}
        onPointerEnter={moveNoButton}
        onPointerDown={moveNoButton}
      >
        <planeGeometry args={[0.28, 0.14]} />
        <meshBasicMaterial color="#ff4d4d" />
        <Text fontSize={0.07} color="white" position={[0, 0, 0.01]}>
          NO
        </Text>
      </mesh>
    </group>
  );
}
