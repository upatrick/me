import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Sparkles,
  MessageSquare,
  Clock,
  Github,
  Linkedin,
  Heart,
  Loader2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/upatrick",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7027077877246377984",
    color: "hover:text-blue-600",
    gradient: "from-blue-600 to-blue-800",
  },
];

const createContactSchema = (t: any) =>
  z.object({
    name: z.string().min(2, t("contact.form.errors.nameMin")),
    email: z.string().email(t("contact.form.errors.emailInvalid")),
    subject: z.string().min(5, t("contact.form.errors.subjectMin")),
    message: z.string().min(10, t("contact.form.errors.messageMin")),
  });

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email.label"),
      value: t("contact.info.email.value"),
      href: "mailto:patrickdutra100@hotmail.com",
      gradient: "from-blue-500 to-cyan-500",
      description: t("contact.info.email.description"),
    },
    {
      icon: Phone,
      label: t("contact.info.phone.label"),
      value: t("contact.info.phone.value"),
      href: "tel:+5511999999999",
      gradient: "from-green-500 to-emerald-500",
      description: t("contact.info.phone.description"),
    },
    {
      icon: MapPin,
      label: t("contact.info.location.label"),
      value: t("contact.info.location.value"),
      href: "#",
      gradient: "from-purple-500 to-pink-500",
      description: t("contact.info.location.description"),
    },
  ];

  const quickStats = [
    { icon: MessageSquare, label: t("contact.quickStats.response"), value: "< 24h" },
    { icon: Clock, label: t("contact.quickStats.availability"), value: "Full-time" },
    { icon: Heart, label: t("contact.quickStats.projects"), value: "30" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactSchema(t)),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // EmailJS configuration - You'll need to set these up in your EmailJS account
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "portifolio";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_9kqqsrr";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "dPEKVzDCRLHr-q38D";

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Patrick Dutra",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      throw new Error("Falha ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden"
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
            {t("contact.badge")}
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                {t("contact.info.title")}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t("contact.info.description")}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group block p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${info.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground mb-1">{info.value}</p>
                      <p className="text-sm text-primary/70">{info.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-foreground">
                {t("contact.social.title")}
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`group flex items-center gap-3 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${social.color}`}
                  >
                    <div
                      className={`p-2 bg-gradient-to-r ${social.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t("contact.form.title")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("contact.form.description")}
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        {t("contact.form.name")} *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder={t("contact.form.placeholders.name")}
                        className={`h-12 ${
                          errors.name
                            ? "border-destructive focus:border-destructive"
                            : "focus:border-primary"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <span className="w-1 h-1 bg-destructive rounded-full"></span>
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t("contact.form.email")} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder={t("contact.form.placeholders.email")}
                        className={`h-12 ${
                          errors.email
                            ? "border-destructive focus:border-destructive"
                            : "focus:border-primary"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <span className="w-1 h-1 bg-destructive rounded-full"></span>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      {t("contact.form.subject")} *
                    </Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder={t("contact.form.placeholders.subject")}
                      className={`h-12 ${
                        errors.subject
                          ? "border-destructive focus:border-destructive"
                          : "focus:border-primary"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <span className="w-1 h-1 bg-destructive rounded-full"></span>
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      {t("contact.form.message")} *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder={t("contact.form.placeholders.message")}
                      rows={5}
                      className={`resize-none ${
                        errors.message
                          ? "border-destructive focus:border-destructive"
                          : "focus:border-primary"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <span className="w-1 h-1 bg-destructive rounded-full"></span>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-3" />
                        {t("contact.form.button.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-3" />
                        {t("contact.form.button.send")}
                      </>
                    )}
                  </Button>

                  {isSubmitSuccessful && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="flex items-center gap-3 text-green-600 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800"
                    >
                      <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">
                        {t("contact.form.success")}
                      </span>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
