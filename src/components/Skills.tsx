import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  Figma,
  Zap,
  Sparkles,
  Target,
  Award,
  Star,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Vue.js", level: 80, icon: "💚" },
    ],
  },
  {
    title: "Styling & Design",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "CSS/SCSS", level: 90, icon: "💅" },
      { name: "Framer Motion", level: 85, icon: "🎭" },
      { name: "Figma", level: 80, icon: "🎯" },
    ],
  },
  {
    title: "Mobile & Responsive",
    icon: Smartphone,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "React Native", level: 75, icon: "📱" },
      { name: "Responsive Design", level: 95, icon: "📐" },
      { name: "PWA", level: 80, icon: "⚡" },
    ],
  },
  {
    title: "Backend & Tools",
    icon: Database,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "PHP", level: 75, icon: "🐘" },
      { name: "GraphQL", level: 75, icon: "🔺" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "MongoDB", level: 70, icon: "🍃" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    gradient: "from-indigo-500 to-blue-500",
    skills: [
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Docker", level: 65, icon: "🐳" },
    ],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    gradient: "from-gray-500 to-slate-500",
    skills: [
      { name: "Git", level: 95, icon: "📚" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "CI/CD", level: 75, icon: "🔄" },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: "💻", color: "text-blue-500" },
  { name: "Figma", icon: Figma, color: "text-purple-500" },
  { name: "Git", icon: GitBranch, color: "text-orange-500" },
  { name: "Vercel", icon: Cloud, color: "text-black" },
  { name: "Performance", icon: Zap, color: "text-yellow-500" },
  { name: "JavaScript", icon: "💛", color: "text-yellow-500" },
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  { name: "SQL", icon: "🗄️", color: "text-green-500" },
];

const achievements = [
  { icon: Award, title: "Projetos Completados", value: "30+", color: "text-yellow-500" },
  { icon: Star, title: "Anos de Experiência", value: "3+", color: "text-blue-500" },
  { icon: Target, title: "Clientes Satisfeitos", value: "100%", color: "text-green-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="container max-w-6xl">
        {/* Header */}
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium border border-primary/20 mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Habilidades Técnicas
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Stack Tecnológica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar experiências digitais
            excepcionais e soluções inovadoras.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 mb-3`}
              >
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {achievement.value}
              </div>
              <div className="text-sm text-muted-foreground">{achievement.title}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border/50 group-hover:border-primary/30 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.5,
                                delay: skillIndex * 0.1 + 0.3,
                                ease: "easeOut",
                              }}
                              className={`h-2 rounded-full bg-gradient-to-r ${category.gradient} relative`}
                            >
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Ferramentas & Tecnologias Favoritas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group flex items-center gap-3 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-xl hover:border-primary/30"
              >
                {typeof tool.icon === "string" ? (
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </span>
                ) : (
                  <tool.icon
                    className={`h-5 w-5 ${tool.color} group-hover:scale-110 transition-transform`}
                  />
                )}
                <span className="font-medium text-sm group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
