import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
// import TearLine from "./TearLine";
import BackModal from "./BackModal";
import { Text } from "@react-three/drei";
import FrontPostcard from "./FrontPostCard";

export default function Envelope({ triggerConfetti }) {
  const groupRef = useRef();
  const rotationYRef = useRef(0);

  const [isBackVisible, setIsBackVisible] = useState(false);

  const WIDTH = 2;
  const HEIGHT = 1.2;
  const THICKNESS = 0.05;

  useFrame(() => {
    if (!groupRef.current) return;

    const targetRotation = isBackVisible ? Math.PI : 0;
    const diff = targetRotation - rotationYRef.current;

    if (Math.abs(diff) > 0.001) {
      rotationYRef.current += diff * 0.03;
    }

    groupRef.current.rotation.y = rotationYRef.current;
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={(e) => {
        e.stopPropagation();
        if (!isBackVisible) {
          setIsBackVisible(true);
        }
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      {/* Envelope body */}
      <mesh>
        <boxGeometry args={[WIDTH, HEIGHT, THICKNESS]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Front of postcard */}
      {!isBackVisible && <FrontPostcard />}

      {isBackVisible && (
        <group
          position={[0, 0, -THICKNESS / 2 - 0.02]}
          rotation={[0, Math.PI, 0]}
        >
          <BackModal onYes={triggerConfetti} />

          {/* Arrow on top-right of BACK side */}
          <mesh
            position={[
              WIDTH / 2 - 0.15,
              HEIGHT / 2 - 0.15,
              THICKNESS / 2 + 0.01,
            ]}
            rotation={[0, 0, -Math.PI / 4]}
            scale={[0.1, 0.2, 0.1]}
          >
            <coneGeometry args={[0.1, 0.2, 3]} />
            <meshStandardMaterial color="red" />
          </mesh>

          {/* Vertical Text next to arrow */}
          <Text
            position={[
              WIDTH / 2 - 0.09,
              HEIGHT / 2 - 0.3,
              THICKNESS / 2 + 0.01,
            ]} // slightly left of arrow
            rotation={[0, 0, Math.PI / 2]} // rotate to vertical
            fontSize={0.07}
            color="black"
            anchorX="center"
            anchorY="middle"
            font="/fonts/ComicNeue-Italic.ttf"
            onPointerUp={(e) => {
              e.stopPropagation();
              if (isBackVisible) {
                setIsBackVisible(false);
              }
            }}
          >
            Back To Postcard
          </Text>
        </group>
      )}

      {/* {isBackVisible && (
        <group
          position={[0, 0, -THICKNESS / 2 - 0.02]}
          rotation={[0, Math.PI, 0]}
        >
          <BackModal />
        </group>
      )} */}
      {/* Tear line — placed on BACK */}
      {/* <group
        position={[0, HEIGHT / 2 - 0.15, -THICKNESS / 2 - 0.001]}
        rotation={[0, Math.PI, 0]}
      >
        <TearLine width={WIDTH * 0.8} />
      </group> */}
    </group>
  );
}
