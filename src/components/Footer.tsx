import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Heart,
  ArrowUp,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Code,
  Briefcase,
  Coffee,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/upatrick",
    label: "GitHub",
    gradient: "from-gray-600 to-gray-800",
    hoverColor: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7027077877246377984",
    label: "LinkedIn",
    gradient: "from-blue-600 to-blue-800",
    hoverColor: "hover:text-blue-600",
  },
];

const footerLinks = [
  {
    title: "Navegação",
    icon: Sparkles,
    links: [
      { label: "Início", href: "#hero" },
      { label: "Sobre", href: "#about" },
      { label: "Projetos", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contato", href: "#contact" },
    ],
  },
  {
    title: "Serviços",
    icon: Code,
    links: [
      { label: "Desenvolvimento Web", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "Consultoria", href: "#" },
      { label: "Mentoria", href: "#" },
    ],
  },
];

const quickContact = [
  {
    icon: Mail,
    label: "Email",
    value: "patrickdutra100@hotmail.com",
    href: "mailto:patrickdutra100@hotmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (12) 981706484",
    href: "tel:+5512981706484",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Jose dos Campos, SP",
    href: "#",
    gradient: "from-purple-500 to-pink-500",
  },
];

const stats = [
  { icon: Code, label: "Projetos", value: "30+" },
  { icon: Coffee, label: "Cafés", value: "∞" },
  { icon: Zap, label: "Commits", value: "1000+" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/10 to-background border-t border-border/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />

      <div className="container max-w-6xl py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Patrick Dutra
              </h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base">
              Desenvolvedor fullstack focado em criar experiências digitais excepcionais e
              interfaces que fazem a diferença no mundo tech.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`group flex items-center justify-center w-12 h-12 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${social.hoverColor}`}
                >
                  <div
                    className={`p-2 bg-gradient-to-r ${social.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon className="h-4 w-4 text-white" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <section.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-base">{section.title}</h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: sectionIndex * 0.1 + linkIndex * 0.05,
                      }}
                    >
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contato Rápido
            </h4>
            <div className="space-y-4">
              {quickContact.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group block p-4 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 bg-gradient-to-r ${contact.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">
                        {contact.label}
                      </div>
                      <div className="text-xs text-muted-foreground">{contact.value}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-border/50"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground mb-6 lg:mb-0">
            <span>
              © {new Date().getFullYear()} Patrick Dutra. Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="h-12 w-12 bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
