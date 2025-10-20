import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";
import SEO from "./components/SEO";
import Analytics from "./components/Analytics";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorFallback from "./components/ErrorFallback";
import { useWebVitals } from "./hooks/useWebVitals";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));

// Lazy load heavy 3D components
const SceneCanvas = lazy(() => import("./components/3d/SceneCanvas"));
const FloatingParticles = lazy(() => import("./components/3d/FloatingParticles"));
const Hero3DObject = lazy(() => import("./components/3d/Hero3DObject"));
const LightingRig = lazy(() => import("./components/3d/LightingRig"));

export default function App() {
  useWebVitals();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <SEO />
        <Analytics />
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </Layout>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
