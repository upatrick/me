import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

export default function FloatingParticles() {
  const ref = useRef<any>(null);

  const isMobile = useMemo(() => {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768
    );
  }, []);

  const particlesCount = isMobile ? 20 : 50; // Reduced count

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // Smaller spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    return positions;
  }, [particlesCount]);

  useFrame((state) => {
    if (ref.current) {
      // Even slower animation and use modulo for better performance
      const time = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(time) * 0.03;
      ref.current.rotation.y = Math.sin(time * 1.3) * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.015} // Smaller size
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4} // Lower opacity
      />
    </Points>
  );
}
