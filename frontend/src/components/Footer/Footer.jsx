import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Footer.module.css";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("credit-helper_lang", e.target.value);
  };

  return (
    <div className={s.container}>
      <div className={s.footer__inner}>
        <a href="https://github.com/ramz1t" target="blank">
          {t("frontend")}
        </a>
        <a href="https://github.com/altr3s" target="blank">
          {t("backend")}
        </a>
        <a href="https://github.com/ramz1t/CreditHelper" target="blank">
          Github
        </a>
        <select value={i18n.resolvedLanguage} onChange={changeLang}>
          <option value="ru">🇷🇺 Русский</option>
          <option value="en">🇺🇸 English</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
