import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Zap, Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/50 to-primary/5"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Blur Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -20, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Neon Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-6 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-primary/30"
          >
            <Code className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
          >
            <Zap className="w-8 h-8 text-purple-500" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
          >
            <Sparkles className="w-8 h-8 text-blue-500" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("projects.title.line1")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {t("projects.title.line2")}
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {t("projects.subtitle")}
        </motion.p>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Loader className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="text-primary font-medium">{t("projects.status")}</span>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex gap-1"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div
              className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{t("projects.progress")}</span>
            <span>55%</span>
          </div>
          <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "55%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
              className="h-2 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <p className="text-muted-foreground">{t("projects.cta")}</p>
        </motion.div>
      </div>

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-primary/50 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-3 h-3 bg-purple-500/50 rounded-full"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-1 h-1 bg-blue-500/50 rounded-full"
        animate={{
          x: [0, 5, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </section>
  );
}
