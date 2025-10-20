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

  const isLowEndDevice = useMemo(() => {
    // Use performance.now() to measure device capability more accurately
    const startTime = performance.now();
    // More comprehensive performance test
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += Math.sqrt(i) * Math.sin(i);
    }
    const endTime = performance.now();
    const performanceScore = endTime - startTime;

    // Consider device low-end if performance test takes > 5ms or is mobile
    return performanceScore > 5 || isMobile;
  }, [isMobile]);

  // Disable 3D scene entirely on low-end devices for better performance
  if (isLowEndDevice) {
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
