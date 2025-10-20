import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function LightingRig() {
  // Static lighting for better performance - no animations
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.4} color="#ffffff" />

      {/* Directional Light - Static */}
      <directionalLight position={[3, 3, 3]} intensity={0.8} color="#8b5cf6" />

      {/* Fill Light */}
      <directionalLight position={[-2, -2, -2]} intensity={0.3} color="#4c1d95" />
    </>
  );
}
