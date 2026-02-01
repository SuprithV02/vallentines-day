import { useEffect } from "react";

export default function TearLine({
  width = 2,
  dotCount = 20,
  progress = 0,
  //   setProgress,
}) {
  const dotSpacing = width / (dotCount - 1);

  useEffect(() => {
    if (progress >= 1) {
      console.log("Cut complete!");
      // Later: trigger flap animation
    }
  }, [progress]);

  return (
    <group>
      {Array.from({ length: dotCount }).map((_, i) => (
        <mesh key={i} position={[-width / 2 + i * dotSpacing, 0, 0]}>
          <boxGeometry args={[0.04, 0.01, 0.01]} />
          <meshStandardMaterial
            color={i / (dotCount - 1) <= progress ? "red" : "black"}
          />
        </mesh>
      ))}
    </group>
  );
}
