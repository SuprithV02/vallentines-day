import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState } from "react";

export default function Letter() {
  const { viewport } = useThree();

  const PADDING = 0.6;
  const width = viewport.width - PADDING;
  const height = viewport.height - PADDING;

  const TOP_MARGIN = 0.01;
  const SIDE_MARGIN = 0.4;
  const BOTTOM_MARGIN = 0.1;

  const [hovered, setHovered] = useState(null);

  return (
    <group>
      {/* PARCHMENT */}
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          color="#f3e2c7"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* LETTER TEXT — left aligned */}
      <Text
        position={[-width / 2 + SIDE_MARGIN, height / 2 - TOP_MARGIN, 0.01]}
        maxWidth={width - SIDE_MARGIN * 2}
        lineHeight={1.45}
        textAlign="left"
        fontSize={0.15}
        color="#3b2f1c"
        font="/fonts/Valentine Rosyalin Italic Demo.ttf"
        anchorX="left"
        anchorY="top"
      >
        {`
My Dearest Love Deeksha,

"If the World is gonna end tomorrow. it can take me, but not you within me." These are the first words which i used to express my intentions for u and i really bound them with all my heart.
From the moment fate entwined our paths, time itself learned to stand still.   
Your laughter became my sunrise, your silence my deepest prayer.
Across every lifetime, through every storm, I would still find you.

Forever Yours,
— Kanna
        `}
      </Text>

      {/* BACK BUTTON */}
      <Text
        position={[-width / 2 + SIDE_MARGIN, -height / 2 + BOTTOM_MARGIN, 0.02]}
        fontSize={0.14}
        color={hovered === "back" ? "#6b4e2e" : "#3b2f1c"}
        anchorX="left"
        anchorY="bottom"
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
          setHovered("back");
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
          setHovered(null);
        }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        ← Back
      </Text>

      {/* NEXT BUTTON */}
      <Text
        position={[width / 2 - SIDE_MARGIN, -height / 2 + BOTTOM_MARGIN, 0.02]}
        fontSize={0.14}
        color={hovered === "next" ? "#6b4e2e" : "#3b2f1c"}
        anchorX="right"
        anchorY="bottom"
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
          setHovered("next");
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
          setHovered(null);
        }}
        onClick={() => {
          console.log("hello");
        }}
      >
        Next →
      </Text>
    </group>
  );
}
