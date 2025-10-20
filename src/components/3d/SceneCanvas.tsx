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
          stencil: false,
          depth: true,
        }}
        dpr={Math.min(window.devicePixelRatio, 1.5)} // Limit DPR for performance
        frameloop="demand" // Only render when needed
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <LightingRig />

          {/* 3D Objects */}
          <Hero3DObject />
          <FloatingParticles />

          {/* Controls - Disabled for performance */}
          {/* <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            autoRotate={false}
          /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
