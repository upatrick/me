import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Eye,
  MessageCircle,
  Sparkles,
  Code,
  Palette,
  Zap,
  Star,
  Loader,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import SceneCanvas from "./3d/SceneCanvas";

export default function Hero() {
  const { t } = useTranslation();
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Patrick_Dutra_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-0 lg:-mt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <SceneCanvas className="w-full h-full" />
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Blur Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 3 + 1; // Random size between 1-4px
          const colors = [
            "bg-primary/40",
            "bg-purple-500/40",
            "bg-blue-500/40",
            "bg-pink-500/40",
            "bg-yellow-500/40",
            "bg-green-500/40",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const duration = 3 + Math.random() * 4; // 3-7 seconds
          const delay = Math.random() * 5; // 0-5 seconds delay
          const moveX = (Math.random() - 0.5) * 100; // -50 to +50
          const moveY = (Math.random() - 0.5) * 60; // -30 to +30

          return (
            <motion.div
              key={i}
              className={`absolute ${color} rounded-full`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: [0, moveX, -moveX, 0],
                y: [0, moveY, -moveY, 0],
                opacity: [0, 0.8, 0.4, 0],
                scale: [0.5, 1, 0.8, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Neon Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                {t("hero.badge")}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-foreground">{t("hero.title.line1")}</span>
                <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {t("hero.title.line2")}
                </span>
                <span className="block text-foreground">{t("hero.title.line3")}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full lg:max-w-lg leading-relaxed"
              >
                {t("hero.description")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base h-11 sm:h-12"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  {t("hero.buttons.viewProjects")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base h-11 sm:h-12"
              >
                <MessageCircle className="w-4 h-4 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform" />
                {t("hero.buttons.contact")}
              </Button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-border/50"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-2 sm:p-3 md:p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  30+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  {t("hero.stats.projects")}
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-2 sm:p-3 md:p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  3+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  {t("hero.stats.experience")}
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-2 sm:p-3 md:p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  {t("hero.stats.satisfaction")}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-purple-500/5 border border-border/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
              <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-xl bg-gradient-to-br from-background to-background/50 border border-border/30 flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 p-2 sm:p-3 lg:p-4">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full bg-gradient-to-br from-primary to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Code className="w-8 sm:w-10 md:w-11 lg:w-12 h-8 sm:h-10 md:h-11 lg:h-12 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-green-500 rounded-full border-2 sm:border-3 lg:border-4 border-background flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </motion.div>

                {/* Name and Title */}
                <div className="text-center space-y-0.5 sm:space-y-1 md:space-y-2">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-foreground">
                    {t("hero.profile.name")}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground">
                    {t("hero.profile.title")}
                  </p>
                </div>

                {/* Tech Stack Preview */}
                <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                  <div className="flex justify-center gap-1 sm:gap-1.5 md:gap-2 flex-wrap">
                    {["React", "TypeScript", "Node.js"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        transition={{
                          delay: 0 + index * 0.0,
                          type: "spring",
                          stiffness: 900,
                          damping: 125,
                        }}
                        className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 cursor-pointer hover:shadow-lg transition-shadow"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-1 sm:gap-1.5 md:gap-2 flex-wrap">
                    {["MongoDB", "Git", "Php"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        transition={{
                          delay: 0 + index * 0.0,
                          type: "spring",
                          stiffness: 900,
                          damping: 125,
                        }}
                        className="px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 cursor-pointer hover:shadow-lg transition-shadow"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 w-full px-2 sm:px-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-primary hover:text-white transition-all duration-300 text-[10px] sm:text-xs h-8 sm:h-9"
                  >
                    <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {t("hero.profile.buttons.cv")}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white text-[10px] sm:text-xs h-8 sm:h-9"
                  >
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {t("hero.profile.buttons.email")}
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                x: [0, 8, 0],
                y: [0, -3, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 -right-4 sm:-right-8 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-lg"
            />
          </motion.div>
        </div>

        {/* Enhanced Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center bg-background/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
