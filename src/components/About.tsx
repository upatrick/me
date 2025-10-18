import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code,
  Heart,
  Coffee,
  Award,
  Zap,
  Sparkles,
  Target,
  Loader,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code,
      title: t("about.highlights.cleanCode.title"),
      description: t("about.highlights.cleanCode.description"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: t("about.highlights.performance.title"),
      description: t("about.highlights.performance.description"),
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: t("about.highlights.uxui.title"),
      description: t("about.highlights.uxui.description"),
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Award,
      title: t("about.highlights.quality.title"),
      description: t("about.highlights.quality.description"),
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "MongoDB",
    "Git",
    "Figma",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Blur Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/3 to-blue-500/5 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
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
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/15 rounded-full blur-xl"
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
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/15 rounded-full blur-xl"
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

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium border border-primary/20 mb-4 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            {t("about.badge")}
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                {t("about.greeting")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description2")}
              </p>
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{
                    delay: 0 + index * 0.0,
                    type: "spring",
                    stiffness: 900,
                    damping: 125,
                  }}
                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t("about.buttons.contact")}
                <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {t("about.buttons.projects")}
                <Target className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Main image placeholder */}
                  <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-border/50 flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-sm">
                    <img
                      src="/TS-284.jpg"
                      alt="Foto de perfil"
                      className="w-full h-full object-cover"
                      style={{
                        transform: "scale(1.2)",
                        imageRendering: "auto",

                        transformOrigin: "right bottom",
                      }}
                    />
                  </div>

                  {/* Enhanced Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl"
                  />
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -10, 0],
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, 8, 0],
                      y: [0, -5, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-lg"
                  />
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    20+
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {t("about.stats.projects")}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.9,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    3+
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {t("about.stats.years")}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 300 }}
                  className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    100%
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {t("about.stats.dedication")}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 group-hover:border-primary/30 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
