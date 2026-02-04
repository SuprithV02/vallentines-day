import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function Pigeon({ active }) {
  const ref = useRef();
  const navigate = useNavigate();

  // KEEP THESE VALUES
  const START_X = 5; // inside frustum
  const END_X = -5;
  const SPEED = 0.015;

  useFrame(() => {
    if (!active || !ref.current) return;

    ref.current.position.x -= SPEED;

    ref.current.position.y = 1.1 + Math.sin(performance.now() * 0.004) * 0.08;

    if (ref.current.position.x < END_X) {
      ref.current.position.x = START_X;
    }
  });

  if (!active) return null;

  return (
    <group
      ref={ref}
      position={[START_X, 0.9, -2]} // 👈 CLOSE TO CAMERA
      scale={1} // 👈 BIGGER
      onPointerDown={(e) => {
        e.stopPropagation(); // prevent Canvas clicks
        sessionStorage.setItem("canViewLoveLetter", "true");
        navigate("/loveLetter");
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      {/* BODY */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#9aa0a6" />
      </mesh>

      {/* HEAD */}
      <mesh position={[0.22, 0.06, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#9aa0a6" />
      </mesh>

      {/* BEAK */}
      <mesh position={[0.34, 0.03, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.04, 0.12, 8]} />
        <meshBasicMaterial color="orange" />
      </mesh>

      {/* WINGS */}
      <mesh position={[0, 0, 0.16]}>
        <boxGeometry args={[0.3, 0.03, 0.2]} />
        <meshBasicMaterial color="#7b8187" />
      </mesh>
      <mesh position={[0, 0, -0.16]}>
        <boxGeometry args={[0.3, 0.03, 0.2]} />
        <meshBasicMaterial color="#7b8187" />
      </mesh>

      {/* STRING */}
      <mesh position={[0.12, -0.2, 0]}>
        <cylinderGeometry args={[0.003, 0.003, 0.35]} />
        <meshBasicMaterial color="black" />
      </mesh>

      {/* FLIER */}
      <mesh position={[0.12, -0.45, 0]}>
        <planeGeometry args={[2, 0.25]} />
        <meshBasicMaterial color="white" />
      </mesh>

      <Text
        position={[0.12, -0.45, 0.01]}
        fontSize={0.12}
        color="black"
        anchorX="center"
        anchorY="middle"
        font="/fonts/ComicNeue-Italic.ttf"
      >
        HeHe...I Know You Love Meee!!
      </Text>
    </group>
  );
}
