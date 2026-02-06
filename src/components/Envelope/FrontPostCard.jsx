// FrontPostcard.js
import { Text, useTexture } from "@react-three/drei";

export default function FrontPostcard() {
  const WIDTH = 2;
  const HEIGHT = 1.2;
  const THICKNESS = 0.05;

  const lineGap = 0.02; // smaller gap for double lines
  const lineWidth = 0.005; // thinner line
  const lineHeight = HEIGHT * 0.8; // keep equal gap from top & bottom

  const textFont = "/fonts/Rosehot.ttf"; // your calligraphy font

  // Vertical positions for stacked sentences
  const baseY = HEIGHT / 2 - 0.3; // slightly below HI....KANNA
  const lineSpacing = 0.15;

  const pictureWidth = 0.6;
  const pictureHeight = HEIGHT * 0.85;
  const pictureX = 0.55; // right side of parallel lines

  const TEXT_LEFT_PADDING = 0.05;
  const TEXT_RIGHT_PADDING = 0.12;
  const TEXT_MAX_WIDTH = WIDTH - TEXT_LEFT_PADDING - TEXT_RIGHT_PADDING - 0.3; // leave room for photo

  const pictureTexture = useTexture("/imgs/my_pic.jpg");

  const sentences = [
    "Love You For All that You Are",
    "All That You Have Been",
    "And ALL That You Will Be",
  ];

  return (
    <group>
      {/* Front body of postcard */}
      <mesh>
        <boxGeometry args={[WIDTH, HEIGHT, THICKNESS]} />
        <meshStandardMaterial color="#fef3e2" />
      </mesh>
      {/* Double vertical lines at center */}
      <group>
        <mesh position={[-lineGap / 2 + 0.21, 0, THICKNESS / 2 + 0.001]}>
          <boxGeometry args={[lineWidth, lineHeight, 0.001]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[lineGap / 2 + 0.2, 0, THICKNESS / 2 + 0.001]}>
          <boxGeometry args={[lineWidth, lineHeight, 0.001]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
      {/* Top-left greeting */}
      <Text
        position={[-WIDTH / 2 + 0.1, HEIGHT / 2 - 0.1, THICKNESS / 2 + 0.01]}
        fontSize={0.12}
        color="black"
        anchorX="left"
        anchorY="top"
        font={textFont}
      >
        LOVE CARD
      </Text>
      {/* Sentences with horizontal lines */}
      {sentences.map((sentence, index) => {
        const yPos = baseY - index * lineSpacing;
        return (
          <group key={index}>
            {/* Sentence text */}
            <Text
              position={[
                -WIDTH / 2 + TEXT_LEFT_PADDING,
                yPos,
                THICKNESS / 2 + 0.01,
              ]}
              maxWidth={TEXT_MAX_WIDTH}
              fontSize={0.065}
              color="black"
              anchorX="left"
              anchorY="top"
              font="/fonts/Valentine Rosyalin Italic Demo.ttf"
            >
              {sentence}
            </Text>

            {/* Horizontal line below the sentence */}
            <mesh
              position={[
                WIDTH / 2 - 1.5,
                yPos - 0.09, // slightly below text
                THICKNESS / 2 + 0.001,
              ]}
            >
              <boxGeometry args={[1, 0.001, 0.001]} />{" "}
              {/* width, height, depth */}
              <meshStandardMaterial color="black" />
            </mesh>
          </group>
        );
      })}
      // After your sentences map loop
      <Text
        position={[
          -WIDTH / 2 + 0.1,
          baseY - sentences.length * lineSpacing - 0.05,
          THICKNESS / 2 + 0.01,
        ]} // slightly below last line
        fontSize={0.08}
        color="black"
        anchorX="left"
        anchorY="top"
        font="/fonts/Lovely-Pretty.ttf"
        rotation={[0, 0, -0.15]} // rotate slightly counter-clockwise
      >
        XOXO
      </Text>
      <Text
        position={[
          -WIDTH / 2 + 0.6,
          baseY - sentences.length * lineSpacing - 0.05,
          THICKNESS / 2 + 0.01,
        ]} // slightly below last line
        fontSize={0.08}
        color="black"
        anchorX="left"
        anchorY="top"
        font="/fonts/Lovely-Pretty.ttf"
        rotation={[0, 0, -0.15]} // rotate slightly counter-clockwise
      >
        XOXO
      </Text>
      <mesh position={[pictureX, 0, THICKNESS / 2 + 0.002]}>
        <planeGeometry args={[pictureWidth, pictureHeight]} />
        <meshStandardMaterial map={pictureTexture} transparent />
      </mesh>
      <Text
        position={[
          pictureX - pictureWidth / 2 + 0.05,
          pictureHeight / 2 - 0.05,
          THICKNESS / 2 + 0.01,
        ]}
        fontSize={0.07}
        color="#ffffff"
        anchorX="left"
        anchorY="top"
        font="/fonts/Lovely-Pretty.ttf"
        rotation={[0, 0, -0.1]}
        material-toneMapped={false}
      >
        — Love From Kanna
      </Text>
    </group>
  );
}
