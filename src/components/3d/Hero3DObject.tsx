import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, MeshReflectorMaterial } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function Hero3DObject() {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  const { scale } = useSpring({
    scale: hovered ? 1.05 : 1, // Reduced scale change
    config: { mass: 1, tension: 200, friction: 40 }, // Lighter config
  });

  useFrame((state) => {
    if (meshRef.current) {
      // Slower animations
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return <group>{/* Removed main floating sphere and text for cleaner design */}</group>;
}
