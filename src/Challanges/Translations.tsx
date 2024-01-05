import { ReactNode, createContext, useContext, useState } from "react";
import "./common.css";

const translations: { [index: string]: any } = {
  en: {
    hello: "Hello!",
    welcome: "Welcome to our app!",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestra aplicación!",
  },
  fr: {
    hello: "Bonjour !",
    welcome: "Bienvenue dans notre application !",
  },
  de: {
    hello: "Hallo!",
    welcome: "Willkommen in unserer App!",
  },
};

const languageContext = createContext({
  language: "en",
  changeLanguage: (newLanguage: string) => {},
  translation: (key: string) => key,
});

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLanguage: string) => setLanguage(newLanguage);

  const translation = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <languageContext.Provider value={{ language, changeLanguage, translation }}>
      {children}
    </languageContext.Provider>
  );
}

function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(languageContext);

  return (
    <div>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Espanol</option>
        <option value="fr">Francais</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

function Greeting() {
  const { translation } = useContext(languageContext);
  return (
    <div>
      <h1>{translation("hello")}</h1>
      <p>{translation("welcome")}</p>
    </div>
  );
}

const Translations = () => {
  return (
    <div className="container">
      <LanguageProvider>
        <LanguageSwitcher />
        <Greeting />
      </LanguageProvider>
    </div>
  );
};

export default Translations;
