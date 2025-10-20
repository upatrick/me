import { useEffect } from "react";

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

export function useWebVitals() {
  useEffect(() => {
    // Web Vitals tracking
    const reportWebVitals = (metric: WebVitalsMetric) => {
      // Send to analytics service
      console.log("Web Vitals:", metric);

      // You can send this to Google Analytics, Mixpanel, etc.
      // Example: gtag('event', metric.name, { value: Math.round(metric.value) });
    };

    // Dynamically import web-vitals
    import("web-vitals")
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      })
      .catch(() => {
        // Fallback if web-vitals is not available
        console.log("Web Vitals not available");
      });
  }, []);
}
