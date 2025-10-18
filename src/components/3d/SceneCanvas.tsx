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

  return (
    <div className={className}>
      <Canvas
        shadows={!isMobile}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={isMobile ? 1 : [1, 2]}
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
            autoRotate={!isMobile}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
