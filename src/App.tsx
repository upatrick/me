import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";
import SEO from "./components/SEO";
import Analytics from "./components/Analytics";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorFallback from "./components/ErrorFallback";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));

export default function App() {
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
