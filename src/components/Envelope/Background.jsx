import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export default function Background() {
  const originalTexture = useLoader(
    THREE.TextureLoader,
    "/imgs/vallentine.png",
  );

  const texture = useMemo(() => {
    const t = originalTexture.clone();
    t.colorSpace = THREE.SRGBColorSpace;
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    return t;
  }, [originalTexture]);

  return (
    <mesh position={[0, 0, -12]}>
      <planeGeometry args={[20, 12]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
