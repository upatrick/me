import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative overflow-hidden"
      aria-label={`Switch to ${currentLanguage === "pt" ? "English" : "Portuguese"}`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: currentLanguage === "pt" ? 1 : 0,
          rotate: currentLanguage === "pt" ? 0 : 180,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center text-lg"
      >
        🇧🇷
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: currentLanguage === "en" ? 1 : 0,
          rotate: currentLanguage === "en" ? 0 : -180,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center text-lg"
      >
        🇺🇸
      </motion.div>

      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
