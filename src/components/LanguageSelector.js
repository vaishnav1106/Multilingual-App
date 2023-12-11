import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const languages = ['en', 'es', 'fr', 'de','hi','ml', 'ta', 'pa', 'as', 'bn'];

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="language-selector">
      <p>Select language:</p>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
