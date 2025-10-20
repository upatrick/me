import React from "react";
import { motion } from "framer-motion";
import { Building2, Code, Briefcase, ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Johnson & Johnson",
    position: "Auxiliar Administrativo (Jovem Aprendiz)",
    period: "jul de 2021 – dez de 2022 · 1 ano e 6 meses",
    description:
      "Apoio administrativo, controle de planilhas, organização de relatórios e suporte a áreas operacionais.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    company: "Johnson & Johnson",
    position: "Desenvolvedor Estagiário",
    period: "jan de 2023 – dez de 2024 · 2 anos",
    description:
      "Durante minha atuação como desenvolvedor na Johnson & Johnson, colaborei com equipes multidisciplinares no planejamento, desenvolvimento e entrega de soluções de software alinhadas aos objetivos estratégicos da empresa. Essa experiência aprimorou minha capacidade de comunicação, resolução de problemas em grupo e colaboração entre diferentes áreas, resultando em projetos mais eficientes e de alta qualidade.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    company: "Estrela do Lar",
    position: "Desenvolvedor Júnior",
    period: "jan de 2025 – presente",
    description:
      "Desenvolvimento de soluções web internas utilizando React, Next.js e integração com APIs REST. Participei de todo o ciclo de desenvolvimento full stack, desde o planejamento até a entrega, com foco em performance, escalabilidade e melhoria contínua da experiência do usuário.",
    icon: <Briefcase className="w-5 h-5" />,
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 pt-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Experiências Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional no desenvolvimento de soluções digitais e
            suporte administrativo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="ml-0 md:ml-16 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {exp.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-primary">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            Atual
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-medium text-muted-foreground mb-1">
                        {exp.position}
                      </h4>

                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>

                      <p className="text-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7027077877246377984"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            Ver detalhes no LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
