import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Google Analytics 4
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID!, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Hotjar
export const HOTJAR_ID = import.meta.env.VITE_HOTJAR_ID;

export const initHotjar = () => {
  if (typeof window !== "undefined" && HOTJAR_ID) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${HOTJAR_ID}.js?sv=6`;
    document.head.appendChild(script);
  }
};

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Hotjar
    initHotjar();

    // Track page views
    if (GA_TRACKING_ID) {
      pageview(location.pathname + location.search);
    }
  }, [location]);

  return <></>;
}

// Extend window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
