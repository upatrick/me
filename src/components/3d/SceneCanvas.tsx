import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import FloatingParticles from "./FloatingParticles";
import Hero3DObject from "./Hero3DObject";
import LightingRig from "./LightingRig";

interface SceneCanvasProps {
  className?: string;
}

export default function SceneCanvas({ className }: SceneCanvasProps) {
  const isMobile = useMemo(() => {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768
    );
  }, []);

  // Disable 3D scene entirely on mobile for better performance
  if (isMobile) {
    return <div className={className}></div>;
  }

  return (
    <div className={className}>
      <Canvas
        shadows={false}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={1}
      >
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

          {/* Lighting */}
          <LightingRig />

          {/* 3D Objects */}
          <Hero3DObject />
          <FloatingParticles />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={false}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
