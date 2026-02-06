import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState } from "react";

export default function LetterContinue() {
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
        font="/fonts/THECURSIVEFONT-DEMOVERSION.ttf"
        anchorX="left"
        anchorY="top"
      >
        {`

Dec 2nd...ee dina nan yavathu mariyalla, life alli first time nan prapancha heeg iruthe anodu nodde. Big Bang might have caused million years back, But You are my Big Bang, My Universe, My Everything. Yella nin bandmele 
yavathu eee tara agilla, dina yeste idruu...ninnadonde yochane, 
As Raghu dixit says "Prathikshna kandaga ninnanu adeno eno eno aagide pade pade nanna hejje daari tappi ninnane bandu seride. Kanna Kanna maathige Bhaasheyondu etake iddakidda haageye Khushi kanthumbide" (Imagine i am "Thelaadtidini")
i fell in love....i am in Love and if possible i will fall in Love again and again and again with you in every lifetime.

I LOVE YOU Kannaaa 

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
          sessionStorage.setItem("canViewLoveLetter", "true");
          window.location.href = "/loveLetter";
        }}
      >
        ← Back
      </Text>

      {/* NEXT BUTTON */}
      {/* <Text
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
      </Text> */}
    </group>
  );
}
