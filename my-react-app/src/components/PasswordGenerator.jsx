import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import '../styles/PasswordGenerator.css';

function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState('');

  const generatePassword = (length = 16, includeNumbers = true, includeSpecial = true) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberCharset = '0123456789';
    const specialCharset = '!@#$%^&*()_-+=<>?';
    let charsetToUse = charset;

    if (includeNumbers) charsetToUse += numberCharset;
    if (includeSpecial) charsetToUse += specialCharset;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charsetToUse.length);
      password += charsetToUse[randomIndex];
    }

    setGeneratedPassword(password);

    const result = zxcvbn(password);
    setStrength(result.score);
    setFeedback(result.feedback.suggestions.join(' '));
  };

  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

  const handleCopyClick = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <div className="password-generator">
      <h1>Secure Password Generator</h1>
      <div className="password-display">
        <input type="text" value={generatedPassword} readOnly />
        <button onClick={handleCopyClick}>Copy</button>
      </div>
      <button onClick={() => generatePassword(16)}>Generate Password</button>
      <div className="strength-indicator">
        <p>Password Strength: {strengthLabels[strength]}</p>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default PasswordGenerator;