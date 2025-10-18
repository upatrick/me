import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function LightingRig() {
  const directionalLightRef = useRef<any>(null);
  const spotLightRef = useRef<any>(null);

  useFrame((state) => {
    if (directionalLightRef.current) {
      directionalLightRef.current.position.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 5;
      directionalLightRef.current.position.z =
        Math.cos(state.clock.elapsedTime * 0.5) * 5;
    }

    if (spotLightRef.current) {
      spotLightRef.current.intensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.3} color="#ffffff" />

      {/* Directional Light */}
      <directionalLight
        ref={directionalLightRef}
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color="#8b5cf6"
      />

      {/* Spot Light */}
      <spotLight
        ref={spotLightRef}
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.7}
        castShadow
        color="#ffffff"
        target-position={[0, 0, 0]}
      />

      {/* Fill Light */}
      <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#4c1d95" />
    </>
  );
}
