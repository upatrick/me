import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundEffects from "./BackgroundEffects";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundEffects />
      <Header />
      <main className="flex-1 pt-16 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
