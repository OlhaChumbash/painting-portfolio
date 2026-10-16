
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import {
  WhatsAppIcon,
  TelegramIcon,
  MoonIcon,
  SunIcon,
} from "@/components/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import LanguageSwitcher, { useLanguage } from "@/components/LanguageContext";

// Static translations for the navigation menu
const translations = {
  english: {
    home: "Home",
    about: "About",
    paintings: "Paintings",
    toggleMenu: "Toggle navigation menu",
    changeTheme: "Change theme",
  },
  german: {
    home: "Startseite",
    about: "Über mich",
    paintings: "Gemälde",
    toggleMenu: "Navigationsmenü öffnen",
    changeTheme: "Design wechseln",
  },
  ukrainian: {
    home: "Головна",
    about: "Про мене",
    paintings: "Картини",
    toggleMenu: "Відкрити меню навігації",
    changeTheme: "Змінити тему",
  },
};

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      type="button"
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  // Fall back to English if an unexpected language value is present.
  const text = translations[language] || translations.english;

  const handleClick = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full px-8 py-8 font-medium flex justify-between items-center dark:text-light relative z-50 md:px-12 lg:px-16 xl:px-32">
      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={text.toggleMenu}
        aria-expanded={isOpen}
        className="flex flex-col justify-center items-center lg:hidden z-50"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block w-6 h-0.5 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block w-6 h-0.5 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block w-6 h-0.5 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>

      {/* Desktop navigation */}
      <nav className="hidden lg:flex items-center">
        <CustomLink href="/" title={text.home} className="mr-4" />
        <CustomLink href="/about" title={text.about} className="mx-4" />
        <CustomLink
          href="/paintings"
          title={text.paintings}
          className="mx-4"
        />
      </nav>

      {/* Desktop social links and settings */}
      <nav className="hidden lg:flex justify-between items-center flex-wrap">
        <motion.a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="WhatsApp"
          className="w-6 ml-3"
        >
          <WhatsAppIcon />
        </motion.a>

        <motion.a
          href="https://t.me/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Telegram"
          className="w-6 ml-3"
        >
          <TelegramIcon />
        </motion.a>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={text.changeTheme}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light"
              ? "bg-dark text-light"
              : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>

        <LanguageSwitcher />
      </nav>

      {/* Centered logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Logo />
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col w-full z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 lg:hidden"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={text.home}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={text.about}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/paintings"
              title={text.paintings}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex justify-between items-center flex-wrap mt-2">
            <motion.a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <WhatsAppIcon />
            </motion.a>

            <motion.a
              href="https://t.me/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TelegramIcon />
            </motion.a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={text.changeTheme}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light"
                  ? "bg-dark text-light"
                  : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>

            <LanguageSwitcher />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
