import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, MeshReflectorMaterial } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function Hero3DObject() {
  const meshRef = useRef<any>(null);
  const groupRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  const { scale, rotation } = useSpring({
    scale: hovered ? 1.1 : 1,
    rotation: hovered ? [0, Math.PI * 0.25, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main floating sphere */}
      <animated.mesh
        ref={meshRef}
        scale={scale}
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshReflectorMaterial
          mirror={0}
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#8b5cf6"
          metalness={0.8}
        />
      </animated.mesh>

      {/* Floating text */}
      <Text
        position={[0, -2, 0]}
        fontSize={viewport.width > 5 ? 0.5 : 0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        3D Portfolio
      </Text>

      {/* Ambient glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.1}
          side={2} // THREE.BackSide
        />
      </mesh>
    </group>
  );
}
