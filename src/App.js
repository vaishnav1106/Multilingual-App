// App.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

const App = () => {
  const { language } = useContext(LanguageContext);
  const translations = require(`./translations/${language}.json`); // Adjusted the path

  return (
    <div className="app">
      <header>
        <h1 className="title">{translations.greeting}</h1>
        <p className="subtitle">{translations.message}</p>
      </header>
      <LanguageSelector />
    </div>
  );
};

export default App;
