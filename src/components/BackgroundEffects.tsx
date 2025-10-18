import React from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const orbs = [
    {
      size: "w-96 h-96",
      color: "bg-gradient-to-r from-purple-400/20 to-pink-400/20",
      blur: "blur-3xl",
      position: "top-20 left-10",
      animation: {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      },
      duration: 8,
    },
    {
      size: "w-80 h-80",
      color: "bg-gradient-to-r from-blue-400/15 to-cyan-400/15",
      blur: "blur-3xl",
      position: "bottom-32 right-16",
      animation: {
        scale: [1.1, 0.9, 1.1],
        opacity: [0.2, 0.5, 0.2],
      },
      duration: 10,
    },
    {
      size: "w-64 h-64",
      color: "bg-gradient-to-r from-emerald-400/25 to-teal-400/25",
      blur: "blur-2xl",
      position: "top-1/2 left-1/4",
      animation: {
        scale: [0.8, 1.3, 0.8],
        opacity: [0.4, 0.7, 0.4],
      },
      duration: 12,
    },
    {
      size: "w-72 h-72",
      color: "bg-gradient-to-r from-orange-400/20 to-red-400/20",
      blur: "blur-3xl",
      position: "bottom-20 left-20",
      animation: {
        scale: [1.2, 0.8, 1.2],
        opacity: [0.25, 0.55, 0.25],
      },
      duration: 9,
    },
    {
      size: "w-56 h-56",
      color: "bg-gradient-to-r from-indigo-400/30 to-purple-400/30",
      blur: "blur-2xl",
      position: "top-32 right-1/3",
      animation: {
        scale: [0.9, 1.4, 0.9],
        opacity: [0.35, 0.65, 0.35],
      },
      duration: 11,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.color} ${orb.blur} ${orb.position} rounded-full`}
          animate={orb.animation}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          style={{
            filter: "blur(40px)",
          }}
        />
      ))}

      {/* Additional floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
    </div>
  );
}
