 
 'use client'
 import React, { useState, useEffect } from 'react';


const Typewriter = () => {
  const greetings = ["Hello", "नमस्ते", "নমস্কার", "నమస్తే ", "வணக்கம்", "ನಮಸ್ಕಾರ", "നമസ്കാരം", "नमस्कार ", "નમસ્તે", "ନମସ୍କାର"];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < greetings[currentIndex].length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText((prev) => prev + greetings[currentIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 200); // Typing speed

      return () => clearTimeout(typingTimeout);
    } else {
      const wordTimeout = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % greetings.length);
        setCurrentText('');
        setCharIndex(0);
      }, 2500); // Wait time before switching to the next language

      return () => clearTimeout(wordTimeout);
    }
  }, [charIndex, currentIndex, greetings]);

  return (
    <div className="typewriter-container">
      {currentText}
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default Typewriter;
